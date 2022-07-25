const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

// get all workouts in descending order
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {};

// update a workout
const updateWorkout = async (req, res) => {};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
