const sequelize = require("../config/dbCon");
const { Product } = require("../model");
const httpStatusCode = require("../utils/httpStatusCode");

class ProductController {
  async createProduct(req, res) {
    try {
      const { name, price, description, stock, status } = req.body;
      if (!name || !price || !description || !stock || !status) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      const product = await Product.create({
        name,
        price,
        description,
        stock,
        status,
      });
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        product,
      });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Failed to create product" });
    }
  }
  async findProduct(req, res) {
    try {
      const product = await Product.findAll();
      return res.status(httpStatusCode.OK).json({
        message: "Product fetched successfully",
        product,
      });
    } catch (error) {
      console.error("Error fetching product:", err);
      res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to create product" });
    }
  }
  async findbyId(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      return res.status(httpStatusCode.OK).json({
        message: "Product fetched successfully",
        product,
      });
    } catch (error) {
      res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to fetch product" });
    }
  }

  async updateProduct(req, res) {
    try {
      const { id } = req.params;
      await Product.update(req.body, {
        where: { id },
      });

      const product = await Product.findByPk(id);
      return res.status(httpStatusCode.OK).json({
        message: "Product updated successfully",
        product,
      });
    } catch (error) {
      res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to update product" });
    }
  }
    async deleteProduct(req, res) {
      try {
        const { id } = req.params;
        await Product.destroy({
          where: { id },
        });

        const product = await Product.findByPk(id);
        return res.status(httpStatusCode.OK).json({
          message: "Product deleted successfully",
          product,
        });
      } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: "Failed to create product" });
      }
    }
}

module.exports = new ProductController();
