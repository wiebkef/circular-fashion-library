const Category = require("../models/category");
const Item = require("../models/item");
const Feature = require("../models/feature");

const relations = () => {
  Category.hasMany(Item, {
    foreignKey: "category_id",
  });
  Item.belongsTo(Category, {
    foreignKey: "id",
  });
  console.log("Hello World");
};
module.exports = relations;
