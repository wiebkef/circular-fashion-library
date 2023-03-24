const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Item = sequelize.define(
  "item",
  {
    sku: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    rented_at: {
      type: DataTypes.DATE,
      // allowNull defaults to true
    },
    short_description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull defaults to true
    },
    size: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    color: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    title: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    brand: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

// `sequelize.define` also returns the model
module.exports = Item;
