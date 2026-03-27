const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');
const validate = require('../middleware/validationMiddleware');

router.get('/', controller.getStudents);
router.get('/add', controller.showAddForm);
router.post('/add', validate, controller.createStudent);
router.get('/edit/:id', controller.showEditForm);
router.put('/edit/:id', controller.updateStudent);
router.delete('/delete/:id', controller.deleteStudent);

module.exports = router;