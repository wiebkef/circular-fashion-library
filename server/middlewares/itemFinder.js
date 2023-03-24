const Item = require("../models/item");
const ErrorResponse = require("../utils/errorResponse");

const itemFinder = async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      req.reqItem = item;
      next();
    } else {
      next(
        new ErrorResponse({
          message: `Can't find a fashion item with id ${req.params.id} `,
          statusCode: 404,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = itemFinder;
