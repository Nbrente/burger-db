var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//here we make our routes through router.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(req.body.name, function (result) {
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    res.json(result);
  });
})

router.delete("/api/burgers/:id", function (req, res) {
  burger.delete(

  )
})

module.exports = router;