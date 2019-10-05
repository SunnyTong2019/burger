var burger = require("../models/burger");

module.exports = function (app) {

    app.get("/index", function (res) {
        var data = burger.selectAll();

        if (data) {
            res.render("index", { burgers: data });
        } else {
            res.status(500).end();
        }
    });


    app.post("/index", function (req, res) {
        var result = burger.insertOne(req.body.burger);

        if (result) {
            res.json({ id: result.insertId });
        } else {
            res.status(500).end();
        }
    });


    app.put("/index/:id", function (req, res) {
        var result = burger.updateOne(req.params.id);

        if (result === 500) {
            res.status(500).end();
        } else if (result === 404) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

}