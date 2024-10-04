const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const apiProductRoutes = require("./routes/api/apiProduct");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(
  "/bootstrap/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/bootstrap/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/v1/api/products", apiProductRoutes);

app.listen(3001, () => {
  console.log("Server Stated!!");
});
