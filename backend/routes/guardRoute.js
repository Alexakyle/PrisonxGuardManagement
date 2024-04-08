const express = require('express')
const router = express.Router()

const guardController = require('../controllers/guardController')

// get all list of prisoners
router.get('/guard', guardController.guards)

router.get('/guard/:id', guardController.guard)

router.get('/search/guard', guardController.searchGuard)

router.get('/delete/guard/:id', guardController.deleteGuard);


module.exports = router;