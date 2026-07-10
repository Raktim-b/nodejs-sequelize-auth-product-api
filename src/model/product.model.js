const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbCon");

const Product = sequelize.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      // defaultValue: "true",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Product;
