const { body, validationResult } = require('express-validator');

const validateStudent = [
    body('name').notEmpty().withMessage("Name is required"),
    body('email').isEmail().withMessage("Valid email required"),
    body('course').notEmpty().withMessage("Course required"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateStudent;