var connection = require("./connection");

function selectAll() {
    connection.query("SELECT * FROM burgers", function (err, data) {
        if (err) {
            return false;
        }
        return data;
    });
};

function insertOne(burger) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", burger, function (err, result) {
        if (err) {
            return false;
        }
        return result;

    });
};


function updateOne(id) {
    connection.query("UPDATE burgers SET devoured = true WHERE id = ?", id, function (err) {
        if (err) {
            console.log(err);
            return 500;
        } else if (result.changedRows === 0) {
            return 404;
        }
        return 200;
    });
};

module.exports = { selectAll, insertOne, updateOne };

