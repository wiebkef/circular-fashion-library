const Category = require("../models/category");
const Item = require("../models/item");
const Feature = require("../models/feature");

const relations = () => {
  // 1 to Many relation Categor/Items
  Category.hasMany(Item, {
    foreignKey: "category_id",
  });
  Item.belongsTo(Category, {
    foreignKey: "id",
  });

  // Many to many relation Features/Items
  Item.belongsToMany(Feature, {
    through: "item_feature",
    foreignKey: "item_id",
  });
  Feature.belongsToMany(Item, {
    through: "item_feature",
    foreignKey: "feature_id",
  });
  console.log("Hello World");
};
module.exports = relations;
