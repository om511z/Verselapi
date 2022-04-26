const express = require('express');

const router = express.Router();

const { getCsharpproducts, getSingleProduct, getCsharpvistors } = require('../controllers/csharp');


router.route('/getCsharpProjects').get(getCsharpproducts);
router.route('/getCsharpProjects/:id').get(getSingleProduct)
router.route('/count').get(getCsharpvistors)
module.exports = router;