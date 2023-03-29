const { sequelize } = require("../config/db");
const Item = require("../models/item");
const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/category");
const Feature = require("../models/feature");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// CLOUDINARY CONFIG
/* cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}); */

const createItem = async (req, res, next) => {
  const features = req.body.features;
  try {
    const newItem = await Item.create(req.body);
    features.forEach(async (elem) => {
      const ifeat = await sequelize.query(
        "INSERT INTO item_feature (item_id, feature_id) VALUES (:itemId, :featId )",

        {
          replacements: { itemId: newItem.dataValues.id, featId: elem },
          type: sequelize.QueryTypes.INSERT,
        }
      );
    });
    /*     const options = {
      public_id: newItem.id,
      folder: fashionItemImages,
    }; */
    // Upload to Cloudinary
    /*     const result = await cloudinary.uploader.upload(req.file.path, options);
    console.log("IMAGE URL", result.secure_url); */
    // UPDATE ITEM WITH IMAGE URL
    /*     newItem.images = result.secure_url;
    const updatedItem = await newItem.save();
    fs.unlinkSync(req.file.path);
    res.status(201).json(updatedItem); */
    res.status(201).json(newItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({ raw: true });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findAll({ include: [Feature, Category] });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItem = async (req, res, next) => {
  const features = req.body.features;

  try {
    const updatedItem = await Item.update(
      req.body,
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

    features.forEach(async (elem) => {
      const ifeat = await sequelize.query(
        "INSERT INTO item_feature (item_id, feature_id) VALUES (:itemId, :featId )",

        {
          replacements: { itemId: req.params.id, featId: elem },
          type: sequelize.QueryTypes.INSERT,
        }
      );
    });
    res.json(updatedItem);
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

    features.forEach(async (elem) => {
      const ifeat = await sequelize.query(
        "DELETE FROM item_feature WHERE item_id=:itemId",

        {
          replacements: { itemId: req.params.id },
          type: sequelize.QueryTypes.DELETE,
        }
      );
    });
    res.json(deletedItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
