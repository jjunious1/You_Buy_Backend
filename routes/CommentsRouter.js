const router = require('express').Router()
const controller = require('../controllers/CommentsControllers')

router.get('/', controller.GetComments)
router.post('/', controller.CreateComments)
module.exports = router
