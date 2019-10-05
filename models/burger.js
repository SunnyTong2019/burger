var orm = require("../config/orm");

var burger = {
    selectAll: function (bool) {
        orm.selectAll(bool);
    },

    insertOne: function (burger) {
        orm.insertOne(burger);
    },

    updateOne: function (id) {
        orm.updateOne(id);
    }
};

module.exports = burger;
