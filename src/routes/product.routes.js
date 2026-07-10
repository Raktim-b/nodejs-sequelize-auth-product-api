const express = require("express");
const AuthCheck = require("../middleware/auth");
const productController = require("../controller/product.controller");
const allowRoles = require("../middleware/allowRoles");
const productRouter = express.Router();

productRouter.post(
  "/product",
  AuthCheck,
  allowRoles("admin"),
  productController.createProduct,
);
productRouter.get("/product", AuthCheck, productController.findProduct);
productRouter.get("/product/:id", AuthCheck, productController.findbyId);
productRouter.put(
  "/product/:id",
  AuthCheck,
  allowRoles("admin"),
  productController.updateProduct,
);
productRouter.delete(
  "/product/:id",
  AuthCheck,
  allowRoles("admin"),
  productController.deleteProduct,
);
module.exports = productRouter;
