const router = require('express').Router()
const controller = require('../controllers/ProductsControllers')

router.get('/', controller.GetProducts)
router.get('/:id', controller.GetOneInProduct)
router.post('/', controller.createProduct)
router.put('/', controller.updateProduct)

module.exports = router
