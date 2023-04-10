const queryBuilder = (queryParams) => {
  //console.log("WWWWWWW", queryParams);
  const { Op } = require("sequelize");

  const mainQuery = {
    ...(queryParams.size && { size: queryParams.size }),
    ...(queryParams.color && { color: queryParams.color }),
    ...(queryParams.brand && { brand: queryParams.brand }),
    ...(queryParams.status && { status: queryParams.status }),
  };

  const genderQuery = queryParams.gender && queryParams.gender;

  const featQuery = { ...(queryParams.feat && { name: queryParams.feat }) };
  const catQuery = { ...(queryParams.cat && { name: queryParams.cat }) };

  return { genderQuery, mainQuery, featQuery, catQuery };
};

module.exports = { queryBuilder };
