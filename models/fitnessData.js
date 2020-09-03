const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter workout name",
      },
      duration: {
        type: Number,
        required: "Enter duration",
      },
      weight: {
        type: Number,
        required: "Enter weight",
      },
      reps: {
        type: Number,
        required: "Enter number of reps",
      },
      sets: {
        type: Number,
        required: "Enter number of sets",
      },
      distance: {
        type: Number,
        required: "Enter distance",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout; //test push
