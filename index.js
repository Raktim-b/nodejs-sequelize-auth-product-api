require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/dbCon");
const router = require("./src/routes/auth.routes");
const productRouter = require("./src/routes/product.routes");

require("./src/model/index"); // sync tables

const app = express();
app.use(express.json());

app.use("/api/auth", router);
app.use("/api", productRouter);

const PORT = process.env.PORT;

sequelize
  .authenticate()
  .then(() => {
    console.log(" Database connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ DB connection error:", err));
