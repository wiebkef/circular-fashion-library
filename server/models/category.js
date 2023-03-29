const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Category = sequelize.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required.",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
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
module.exports = Category;
