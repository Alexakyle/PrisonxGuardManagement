const express = require('express')
const router = express.Router()

const prisonerController = require('../controllers/prisonerController')

// get all list of prisoners
router.get('/prisoners', prisonerController.prisoners)

router.get('/prisoner/:id', prisonerController.prisoner)

router.get('/greet/person', prisonerController.greet)

router.get('/search/prisoner', prisonerController.searchPrisoner)


module.exports = router;