// Student Name - Naga Sumanth Vema
// Student Id - 1227779282
// Dude Date - 02/18/2024

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sumanthvema1234:YmInlQ6qMhazRcki@cluster1.r98ubop.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
