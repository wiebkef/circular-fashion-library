const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Item = require("../models/item");
const Feature = require("../models/feature");

const ItemFeature = sequelize.define(
  "item_feature",
  {
    selfGranted: DataTypes.BOOLEAN,
  },
  { timestamps: false }
);

module.exports = ItemFeature;
