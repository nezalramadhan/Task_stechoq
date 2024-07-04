const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/models");
const sequelize = require("./src/config/config");
const TaskRoutes = require("./src/routes/TaskRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(TaskRoutes);
const PORT = 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
