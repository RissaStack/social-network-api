const router = require('express').Router();

const { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought} = require('../../controllers/thoughtControllers');

// Set up GET all and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;