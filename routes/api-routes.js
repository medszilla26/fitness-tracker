const Workout = require("../models/fitnessData.js");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find();
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create(req.body)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    Workout.update();
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
