const router = require('express').Router()
const controller = require('../controllers/UserProductsControllers')
const middleware = require('../middleware')

router.get('/:id', controller.GetSales)
router.post('/:id', controller.NewSell)
router.put(
  '/:id/:sale_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateSale
)
router.delete(
  '/:id/:sale_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteSale
)

module.exports = router
