const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  degree: String,
  course: String,
  grade: String
}, {
  collection: 'studentDetails' // specifying the collection name
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
