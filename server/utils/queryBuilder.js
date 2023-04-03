const queryBuilder = (queryParams) => {
  console.log("WWWWWWW", queryParams);

  const mainQuery = {
    ...(queryParams.size && { size: queryParams.size }),
    ...(queryParams.color && { color: queryParams.color }),
    ...(queryParams.gender && { gender: queryParams.gender }),
    ...(queryParams.brand && { brand: queryParams.brand }),
    ...(queryParams.gender && { gender: queryParams.gender }),
  };

  let featQuery = { ...(queryParams.feat && { name: queryParams.feat }) };
  let catQuery = { ...(queryParams.cat && { name: queryParams.cat }) };
  console.log("catQuery", catQuery);
  console.log("featQuery", featQuery);
  console.log("mainQuery", mainQuery);
  if (!featQuery) {
    console.log("IS EMPTY!");
  }
  return { mainQuery, featQuery, catQuery };
};

const statementBuilder = (mainQuery, featQuery, catQuery) => {
  const featStatement = featQuery.name ? { leads_id: filters.leads_id } : {};

  if (searchParams.id) whereStatement.id = searchParams.id;
  if (searchParams.username)
    whereStatement.username = { $like: "%" + searchParams.username + "%" };
  models.user.findAll({
    where: whereStatement,
  });
  return "bla";
};
module.exports = { queryBuilder, statementBuilder };
