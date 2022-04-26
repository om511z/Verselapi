const express = require('express')
const router = express.Router();

const { getHtmlproducts, getHtmlvistors,getSinglehtmlProduct } = require('../controllers/htmlController')



router.route('/gethtmlprojects').get(getHtmlproducts);
router.route('/gethtmlProjects/:id').get(getSinglehtmlProduct)
router.route('/html/count').get(getHtmlvistors)
module.exports = router;