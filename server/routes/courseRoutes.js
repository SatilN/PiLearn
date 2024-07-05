const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

// @route  GET api/courses
// @desc   Get all courses
// @access Public
router.get('/', getCourses);

// @route  GET api/courses/:id
// @desc   Get course by ID
// @access Public
router.get('/:id', getCourseById);

// @route  POST api/courses
// @desc   Add a course
// @access Private
router.post('/', addCourse);

// @route  PUT api/courses/:id
// @desc   Update a course
// @access Private
router.put('/:id', updateCourse);

// @route  DELETE api/courses/:id
// @desc   Delete a course
// @access Private
router.delete('/:id', deleteCourse);

module.exports = router;
