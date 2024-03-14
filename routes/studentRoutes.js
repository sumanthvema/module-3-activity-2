const express = require('express');
const studentController = require('../controllers/studentControllers');

const router = express.Router();

router.post('/', studentController.addStudent);
router.get('/:id', studentController.findStudentById);
router.patch('/:id', studentController.updateStudentById);
router.delete('/:id', studentController.deleteStudentById);

module.exports = router;
