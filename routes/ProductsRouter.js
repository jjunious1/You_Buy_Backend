const router = require('express').Router()
const controller = require('../controllers/ProductsControllers')

router.get('/', controller.GetProducts)
router.get('/:id', controller.GetCommentsInProduct)

module.exports = router
