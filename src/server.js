'use strict'

const express = require('express');
const app = express();

const logger = require('./middleware/logger')
const recipeRoutes = require('./routes/recipes')
const workoutRoutes = require('./routes/workout')

// error handlers 
const notFound = require('./error-handlers/404')
const errors = require('./error-handlers/500')


app.use(express.json());

app.use(logger)
app.use(recipeRoutes);
app.use(workoutRoutes)


// catching errors
app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on http://localhost:${port}/`))
  }
}