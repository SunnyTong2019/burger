var burger = require("../models/burger");

module.exports = function (app) {

    app.get("/", function (res) {
        var nonDevouredBurgers = burger.selectAll(false);
        var devouredBurgers = burger.selectAll(true);

        if (nonDevouredBurgers && devouredBurgers) {
            res.render("index", { nonDevouredBurgers: nonDevouredBurgers, devouredBurgers: devouredBurgers });
        } else {
            res.status(500).end();
        }
    });


    app.post("/api/burgers", function (req, res) {
        var result = burger.insertOne(req.body.burger);

        if (result) {
            res.json({ id: result.insertId });
        } else {
            res.status(500).end();
        }
    });


    app.put("/api/burgers/:id", function (req, res) {
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