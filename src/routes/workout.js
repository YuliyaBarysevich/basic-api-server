'use strict'

const express = require('express');


const WorkoutPlan = require('../models/workout')

const workout = new WorkoutPlan();

const router = express.Router();


router.get('/workouts', getWorkout);
router.get('/workouts/:id', getOneWorkout);
router.post('/workouts', createWorkout);
router.put('/workouts/:id', updateWorkout)
router.delete('/workouts/:id', deleteWorkout)

function getWorkout(req, res) {
  let getAllWorkouts = workout.read();
  res.status(200).json(getAllWorkouts);
}

function getOneWorkout(req, res) {
  const id = parseInt(req.params.id);
  let oneWorkout = workout.read(id);
  res.status(200).json(oneWorkout);
}

function createWorkout(req, res) {
  let workoutContent = req.body;
  let createdWorkout = workout.create(workoutContent);
  res.status(201).json(createdWorkout)
}

function updateWorkout(req, res){
  const id = parseInt(req.params.id);
  const workoutContent = req.body;
  let oneWorkout = workout.update(id, workoutContent);
  res.status(200).json(oneWorkout)
}

function deleteWorkout(req, res) {
  const id = parseInt(req.params.id);
  workout.delete(id);
  res.status(200).json(null)
}

module.exports = router;