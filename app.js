// Student Name - Naga Sumanth Vema
// Student Id - 1227779282
// Dude Date - 02/18/2024

const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());
const uri = "mongodb+srv://sumanthvema1234:YmInlQ6qMhazRcki@cluster1.r98ubop.mongodb.net/module3db?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/api/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
