const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Validation middleware
const validateContactForm = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .escape(),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ min: 5, max: 200 }).withMessage('Subject must be between 5 and 200 characters')
    .escape(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters')
];

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array().map(err => err.msg).join('. ')
    });
  }
  next();
};

// Routes
router.post('/', validateContactForm, handleValidationErrors, contactController.createMessage);
router.get('/', contactController.getAllMessages);
router.get('/:id', contactController.getMessage);
router.delete('/:id', contactController.deleteMessage);

module.exports = router;
