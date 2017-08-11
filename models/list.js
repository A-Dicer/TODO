var orm = require("../config/orm.js");

var list = {
  all: function(cb) {
    orm.all("list", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("list", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("list", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("list", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = list;
