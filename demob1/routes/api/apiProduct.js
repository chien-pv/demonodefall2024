const express = require("express");
const router = express.Router();
const ApiProductController = require("../../controllers/api/product_controller");

router.get("/", ApiProductController.index);
router.get("/detail/:id", ApiProductController.show);
router.post("/create", ApiProductController.create);
router.delete("/delete/:id", ApiProductController.delete);
router.put("/update/:id", ApiProductController.update);

module.exports = router;
