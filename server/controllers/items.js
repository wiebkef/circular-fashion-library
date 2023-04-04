const { sequelize } = require("../config/db");
const Item = require("../models/item");
const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/category");
const Feature = require("../models/feature");
const { queryBuilder, statementBuilder } = require("../utils/queryBuilder");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createItem = async (req, res, next) => {
  const features = req.body.features.split(",");
  try {
    const { images, ...body } = req.body;
    const newItem = await Item.create(body);
    features.forEach(async (elem) => {
      const ifeat = await sequelize.query(
        "INSERT INTO item_feature (item_id, feature_id) VALUES (:itemId, :featId )",
        {
          replacements: { itemId: newItem.dataValues.id, featId: elem },
          type: sequelize.QueryTypes.INSERT,
        }
      );
    });
    const options = {
      public_id: newItem.id,
      folder: "images",
    };
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, options);
    // UPDATE ITEM WITH IMAGE URL
    newItem.images = [result.secure_url];
    const imgAddedItem = await newItem.save();
    // DELETE ITEM LOCALLY
    fs.unlinkSync(req.file.path);
    res.status(201).json(imgAddedItem);
    // res.status(201).json(newItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getAllItems = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const offset = (page - 1) * limit;
  const { mainQuery, featQuery, catQuery } = queryBuilder(req.query);
  console.log(mainQuery);
  console.log("FEAT", featQuery);

  delete req.query.page;
  delete req.query.limit;

  /*   const { featStatement } = statementBuilder(mainQuery, featQuery, catQuery); */

  try {
    const items = await Item.findAll(
      {
        include: [
          { model: Feature, where: featQuery, required: true },
          { model: Category, where: catQuery, required: true },
        ],
        where: mainQuery,
        order: [["updated_at", "DESC"]],
        offset: offset,
        limit: limit,
      },
      { raw: true }
    );
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findOne({
      include: [Feature, Category],
      where: { id: req.params.id },
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItem = async (req, res, next) => {
  const features = req.body.features.split(",");
  try {
    const { images, ...body } = req.body;
    const options = {
      public_id: req.params.id,
      folder: "images",
    };
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, options);
    fs.unlinkSync(req.file.path);
    const updatedItem = await Item.update(
      { ...body, images: [result.secure_url] },
      {
        where: {
          id: req.params.id,
        },
      },
      { returning: true } /*
      {
        new: true,
        runValidators: false,
      } */
    );
    await sequelize.query("DELETE FROM item_feature WHERE item_id = :itemId", {
      replacements: { itemId: req.params.id },
    });
    features.forEach(async (elem) => {
      const ifeat = await sequelize.query(
        "INSERT INTO item_feature (item_id, feature_id) VALUES (:itemId, :featId )",
        {
          replacements: { itemId: req.params.id, featId: elem },
          type: sequelize.QueryTypes.INSERT,
        }
      );
    });
    res.status(201).json(updatedItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const deleteItem = async (req, res, next) => {
  const features = req.body.features;
  try {
    const deletedItem = await Item.destroy({
      where: {
        id: req.params.id,
      },
    });
    await sequelize.query("DELETE FROM item_feature WHERE item_id = :itemId", {
      replacements: { itemId: req.params.id },
    });
    res.json(deletedItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getWardrobe = async (req, res, next) => {
  try {
    const item = await Item.findAll({
      include: [Feature, Category],
      where: { user_id: req.params.id },
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  getWardrobe,
};
