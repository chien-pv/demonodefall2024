const express = require("express");
const multer = require("multer");

const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
var upload = multer({ storage: storage });

const ProductsController = require("../controllers/products_controller");

router.get("/", ProductsController.index);
router.get("/new", ProductsController.new);
router.get("/delete/:id", ProductsController.delete);
router.post("/create", upload.single("image"), ProductsController.create);

module.exports = router;
