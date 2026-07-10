const sequelize = require("../config/dbCon");
const User = require("../model/user.model");
const httpStatusCode = require("../utils/httpStatusCode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class authController {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body;
      if (!name || !email || !password) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      const existUser = await User.findOne({ where: { email: email } });
      if (existUser) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "user already exist",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassowrd = await bcrypt.hash(password, salt);
      const user = await User.create({
        name,
        email,
        password: hashPassowrd,
        role,
      });
      return res.status(httpStatusCode.CREATED).json({
        message: "Product created successfully",
        user,
      });
    } catch (error) {
      console.error("Error registering:", error);
      res
        .status(httpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to register user" });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const checkUser = await User.findOne({ where: { email: email } });
      if (!checkUser) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "invalid credential",
        });
      }
      const checkPassword = await bcrypt.compare(password, checkUser.password);
      if (!checkPassword) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "wrong password",
        });
      }
      const token = jwt.sign(
        {
          id: checkUser.id,
          name: checkUser.name,
          email: checkUser.email,
          role: checkUser.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
      );
      return res.status(httpStatusCode.OK).json({
        success: true,
        message: "User Loggedin Successfully",
        data: {
          id: checkUser.id,
          name: checkUser.name,
          email: checkUser.email,
          role: checkUser.role,
        },
        token: token,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
  async profile(req, res) {
    try {
      const userId = req.user.id;
      const profile = await User.findByPk(userId);
      return res.status(httpStatusCode.OK).json({
        message: "User Fetched successfully",
        profile: profile,
      });
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
  // async findProduct(req, res) {
  //   try {
  //     const product = await Product.findAll();
  //     return res.status(201).json({
  //       message: "Product created successfully",
  //       product,
  //     });
  //   } catch (error) {
  //     console.error("Error creating product:", err);
  //     res.status(500).json({ error: "Failed to create product" });
  //   }
  // }
  // async updateProduct(req, res) {
  //   try {
  //     const { id } = req.params;
  //     await Product.update(req.body, {
  //       where: { id },
  //     });

  //     const product = await Product.findByPk(id);
  //     return res.status(201).json({
  //       message: "Product created successfully",
  //       product,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ error: "Failed to create product" });
  //   }
  // }
  // async deleteProduct(req, res) {
  //   try {
  //     const { id } = req.params;
  //     await User.destroy({
  //       where: { id },
  //     });

  //     const product = await User.findByPk(id);
  //     return res.status(201).json({
  //       message: "Product created successfully",
  //       product,
  //     });
  //   } catch (error) {
  //     res.status(500).json({ error: "Failed to create product" });
  //   }
  // }
}

module.exports = new authController();
