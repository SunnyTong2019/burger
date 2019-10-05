var orm = require("../config/orm");

var burger = {
    selectAll: orm.selectAll,

    insertOne: function (burger) {
        orm.insertOne(burger);
    },

    updateOne: function (id) {
        orm.updateOne(id);
    }
};

module.exports = burger;
