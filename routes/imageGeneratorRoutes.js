const express = require('express');
const router = express.Router();
const { generateAiImage } = require('../controllers/generateImageController')


router.post('/generateImage', generateAiImage)


module.exports = router