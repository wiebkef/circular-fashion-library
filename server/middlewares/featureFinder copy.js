const Category = require("../models/category");
const ErrorResponse = require("../utils/errorResponse");

const categoryFinder = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      req.reqCategory = category;
      next();
    } else {
      next(
        new ErrorResponse({
          message: `Can't find a category with id ${req.params.id} `,
          statusCode: 404,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = categoryFinder;
