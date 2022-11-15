const router = require('express').Router()
const controller = require('../controllers/UserProductsControllers')
const middleware = require('../middleware')

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSales
)
router.post('/:id', controller.NewSell)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateSale
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteSale
)

module.exports = router
