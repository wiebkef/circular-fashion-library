const Item = require("../models/item");
const ErrorResponse = require("../utils/errorResponse");

const createItem = async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
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

const updateItem = async (req, res, next) => {
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
    console.log(updatedItem);
    res.json(updatedItem);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const deletedItem = await Item.destroy({
      where: {
        id: req.params.id,
      },
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
