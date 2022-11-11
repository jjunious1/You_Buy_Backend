const router = require('express').Router()
const controller = require('../controllers/UserProductsControllers')
const middleware = require('../middleware')

router.get('/:id', controller.GetSales)
router.post(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.Sell
)

module.exports = router
