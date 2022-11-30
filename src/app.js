const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const port = process.env.PORT_SERVER || 3001;

const app = express();
const { sequelize } = require("./utils/database");

// routers
const { userRouter } = require("./routes/user.route");

// middlewares
app.use(express.json());

app.use("/api/v1/users", userRouter);

sequelize
  .authenticate()
  .then(async () => {
    console.log("Connection has been established successfully.");

    await sequelize.sync();

    app.listen(port, () => {
      console.log(`Server started at port ${port}.`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
