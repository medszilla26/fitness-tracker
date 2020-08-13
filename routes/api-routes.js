// const router = require("express").Router();
const Workout = require("../models/fitnessData.js");

module.exports = (router) => {
  router.get("/api/workouts", (req, res) => {
    Workout.find();
  });

  router.post("/api/workouts", (req, res) => {
    Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  router.post("/api/workouts/range", (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
