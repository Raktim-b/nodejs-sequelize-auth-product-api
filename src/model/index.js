const User = require("./user.model");
const sequelize = require("../config/dbCon");
const Product = require("../model/product.model");

sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing DB:", err));

module.exports = { User, Product };
