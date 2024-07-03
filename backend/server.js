const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const app = express();
const uri='mongodb+srv://admin:admin123@expensetracker.sb5mqst.mongodb.net/?retryWrites=true&w=majority&appName=expensetracker';
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});


app.use('/api/workouts', workoutRoutes);


mongoose.connect(uri)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(4000, () => {
      console.log('listening for requests on port', 4000)
    })
  })
  .catch((err) => {
    console.log(err)
  });