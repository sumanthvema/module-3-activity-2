// Student Name - Naga Sumanth Vema
// Student Id - 1227779282
// Dude Date - 02/18/2024

const Student = require('../models/studentModels');

exports.addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    console.log(student);
    res.status(201).json({ status: 'success', data: student });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

exports.findStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    console.log(student);
    res.status(200).json({ status: 'success', data: student });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: 'Student not found' });
  }
};

exports.updateStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    console.log(student);
    res.status(200).json({ status: 'success', data: student });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: 'Student not found' });
  }
};

exports.deleteStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    console.log(student);
    res.status(204).json({ status: 'success', data: student });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: 'Student not found' });
  }
};
