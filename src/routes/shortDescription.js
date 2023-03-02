const express = require('express');
const shortDescriptionController = require('../controllers/shortDescription')
const router = express.Router();

router.get('/', shortDescriptionController.getShortDescription);

module.exports = router;
