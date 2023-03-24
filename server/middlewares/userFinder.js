const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");

const userFinder = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      req.reqUser = user;
      next();
    } else {
      next(
        new ErrorResponse({
          message: `Can't find a user with id ${req.params.id} `,
          statusCode: 404,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = userFinder;
