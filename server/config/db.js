const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.ELEPHANT_SQL_CONNECTION_STRING);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to PostgreSQL DB successful.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};
module.exports = { connectDB, sequelize };
