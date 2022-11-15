const router = require('express').Router()
const controller = require('../controllers/ProductsControllers')

router.get('/', controller.GetProducts)
router.get('/:id', controller.GetOneInProduct)

module.exports = router
