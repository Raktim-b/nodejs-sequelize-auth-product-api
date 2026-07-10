const express = require("express");

const AuthCheck = require("../middleware/auth");
const authController = require("../controller/auth.controller");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", AuthCheck, authController.profile);

// router.get("/find/product", productController.findProduct);
// router.get("/find/name", productController.findName);
// router.get("/get/totalPrice", productController.totalPrice);
// router.get("/get/gt", productController.findGt);
// router.get("/get/findOne", productController.findOne);
// router.get("/get/product/:id", productController.findbyId);
// router.put("/update/product/:id", productController.updateProduct);
// router.delete("/delete/user/:id", authController.deleteProduct);

module.exports = router;
