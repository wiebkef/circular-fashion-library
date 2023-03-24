const Item = require("../models/item");
const ErrorResponse = require("../utils/errorResponse");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({ raw: true });
    res.json(items);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res, next) => {
  console.log("AAAAAAA", req.reqItem);
  res.json(req.reqItem);

  /*  const id = req.params.id;
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      console.log(item);
      return res.status(404).json({ message: "Item not found" });
    }
    console.log(item);

    res.json(item);
  } catch {
    res.status(500).json({ message: error.message });
  } */
};

module.exports = { getAllItems, getItemById };
