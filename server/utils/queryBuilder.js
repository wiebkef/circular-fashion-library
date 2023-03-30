const queryBuilder = (queryParams) => {
  console.log("WWWWWWW", queryParams);

  const mainQuery = {
    ...(queryParams.size && { size: queryParams.size }),
    ...(queryParams.color && { color: queryParams.color }),
    ...(queryParams.gender && { gender: queryParams.gender }),
    ...(queryParams.brand && { brand: queryParams.brand }),
  };

  let featQuery = { ...(queryParams.feat && { name: queryParams.feat }) };
  let catQuery = { ...(queryParams.cat && { name: queryParams.cat }) };
  console.log("tttttt", mainQuery);

  return { mainQuery, featQuery, catQuery };
};
module.exports = queryBuilder;
