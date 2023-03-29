const { sequelize } = require("../config/db");
const Item = require("../models/item");
const ErrorResponse = require("../utils/errorResponse");
const Category = require("../models/Category");
const Feature = require("../models/feature");

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
    res.status(201).json(newItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({ raw: true });
    res.json(items);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findAll({ include: Feature, Category });
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
