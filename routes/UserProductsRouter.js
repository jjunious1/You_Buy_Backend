const router = require('express').Router()
const controller = require('../controllers/UserProductsControllers')
const middleware = require('../middleware')

router.get('/', controller.GetSales)
router.post('/', controller.Sell)

module.exports = router
