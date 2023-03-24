const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "user",
  {
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer",
    },
    first_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    last_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING(320),
      // allowNull defaults to true
    },
    street: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    house_no: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    supplement: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    zip: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    city: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: "Germany",
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
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
//console.log(User === sequelize.models.User); // true
module.exports = User;
