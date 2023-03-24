const Item = require("../models/item");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({ raw: true });
    //console.log("All items:", JSON.stringify(items, null, 2));
    res.json(items);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllItems };
