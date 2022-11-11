const router = require('express').Router()
const controller = require('../controllers/ProductsControllers')
const middleware = require('../middleware')

router.get('/', controller.GetProducts)

module.exports = router
