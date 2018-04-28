var connection = require("../config/connection.js");

var orm = {
  create: function (name, cb) {
    let queryString = "INSERT INTO burger (name, isEaten) VALUES (" + "'" + name + "'" + ", 0)";

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  all: function (cb) {
    let queryString = "SELECT * FROM burger;";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function (id, cb) {
    let queryString = "DELETE * FROM burger WHERE id=?"
    connection.query(queryString, [id], function (err, result) {
      console.log('deleted from: ' + res.rowsAffected)
    });
  },
  update: function (id, cb) {
    let queryString = "UPDATE burger SET isEaten=1 WHERE id=?";
    console.log("cb " + cb);
    console.log("queryString: " + queryString);
    connection.query(queryString, [id], function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }


};

// Export the orm object for the model (cat.js).
module.exports = orm;