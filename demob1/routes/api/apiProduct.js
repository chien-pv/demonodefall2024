const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");

const ApiProductController = require("../../controllers/api/product_controller");

function checkloginAPI(req, res, next) {
  let token = req.headers.authorization;

  try {
    let decoded = jwt.verify(token, "demoKey");
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401).json({ message: "Bạn không có quyền truy cập!!!" });
  }
}

router.get("/", checkloginAPI, ApiProductController.index);
router.get("/detail/:id", ApiProductController.show);
router.post("/create", ApiProductController.create);
router.delete("/delete/:id", ApiProductController.delete);
router.put("/update/:id", ApiProductController.update);

module.exports = router;
