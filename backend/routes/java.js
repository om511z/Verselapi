const express = require('express');
const { getJavavistors,getjavaproducts, getSingleProduct } = require('../controllers/javaController');
const router = express.Router();



router.route('/java/count').get(getJavavistors);
router.route('/java/project').get(getjavaproducts);
router.route('/getjavaProjects/:id').get(getSingleProduct)
module.exports = router;