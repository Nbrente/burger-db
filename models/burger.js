var orm = require("../config/orm.js");

var burger = {
  update: function (id, cb) {
    console.log('/update')
    orm.update(id,function (res) {
      cb(res);
    })


  },
  create: function (name, cb) {
    orm.create(name, function (res) {
      cb(res);
    })


  },
  delete: function (id, cb) {
    orm.delete(id, function (res) {
      cb(res);
    })


  },
  all: function (cb) {
    console.log("/all")
    orm.all(function (res) {
      cb(res);
    });   

  }
}

module.exports = burger;