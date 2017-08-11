var express = require("express");

var router = express.Router();

var list = require("../models/list.js");

router.get("/", function(req, res) {
  list.all(function(data) {
    var listObject = {
      list: data
    };
    console.log(listObject);
    res.render("index", listObject);
  });
});

router.post("/", function(req, res) {
  list.create([
    "thingsTODO", "isDone"
  ], [
    req.body.thingsTODO, req.body.isDone
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  list.update({
    isDone: req.body.isDone
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  list.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
