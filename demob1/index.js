const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const apiProductRoutes = require("./routes/api/apiProduct");

const apiHomeRoutes = require("./routes/api/apiHome");

const app = express();

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

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
app.use("/v1/api/", apiHomeRoutes);

app.listen(3001, () => {
  console.log("Server Stated!!");
});
