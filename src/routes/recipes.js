'use strict'

const express = require('express');

const Recipe = require('../models/recipes')

const recipes = new Recipe();

const router = express.Router();

//RESTful routes 

router.get('/recipes', getRecipes);
router.get('/recipes/:id', getOneRecipe);
router.post('/recipes', createRecipe);
router.put('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);

function getRecipes(req, res) {
  let getAllRecipes = recipes.read();
  res.status(200).json(getAllRecipes);
}

function getOneRecipe(req, res){
  const id = parseInt(req.params.id);
  let oneRecipe = recipes.read(id);
  res.status(200).json(oneRecipe)
}

function createRecipe(req, res){
  let recipeContent = req.body;
  let createdRecipe = recipes.create(recipeContent);
  res.status(201).json(createdRecipe)
}

function updateRecipe(req, res){
  const id = parseInt(req.params.id);
  let recipeContent = req.body;
  let oneRecipe = recipes.update(id, recipeContent)
  res.status(200).json(oneRecipe)
}

function deleteRecipe(req, res){
  const id = parseInt(req.params.id);
  recipes.delete(id);
  res.status(200).json(null)

}

module.exports = router;
