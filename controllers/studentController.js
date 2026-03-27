const Student = require('../models/studentModel');

// Get all students
exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        const stats = {
            total: students.length,
            courses: [...new Set(students.map(s => s.course))].length,
            recent: students.filter(s => {
                const date = new Date(s.createdAt);
                const today = new Date();
                return date.toDateString() === today.toDateString();
            }).length
        };
        res.render('index', { students, stats });
    } catch (error) {
        console.error("getStudents error:", error);
        res.status(500).render('error', { error: error.message });
    }
};

// Add Student Form
exports.showAddForm = (req, res) => {
    res.render('addStudent');
};

// Create Student
exports.createStudent = async (req, res) => {
    try {
        await Student.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.error("createStudent error:", error);
        res.status(500).render('error', { error: error.message });
    }
};

// Edit Form
exports.showEditForm = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.render('editStudent', { student });
    } catch (error) {
        console.error("showEditForm error:", error);
        res.status(500).render('error', { error: error.message });
    }
};

// Update Student
exports.updateStudent = async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    } catch (error) {
        console.error("updateStudent error:", error);
        res.status(500).render('error', { error: error.message });
    }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.error("deleteStudent error:", error);
        res.status(500).render('error', { error: error.message });
    }
};