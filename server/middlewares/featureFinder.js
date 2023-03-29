const Feature = require("../models/feature");
const ErrorResponse = require("../utils/errorResponse");

const featureFinder = async (req, res, next) => {
  try {
    const feature = await Feature.findByPk(req.params.id);
    if (feature) {
      req.reqFeature = feature;
      next();
    } else {
      next(
        new ErrorResponse({
          message: `Can't find a feature with id ${req.params.id} `,
          statusCode: 404,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = featureFinder;
