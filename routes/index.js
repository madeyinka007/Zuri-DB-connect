const express = require('express')
const router = express.Router()
const routeController = require('./../controllers')

//basic routes
router.post('/create', routeController.createPayload)
router.get('/fetch', routeController.fetchPayload)
router.get('/single/:id', routeController.fetchPayloadById)
router.put('/update/:id', routeController.updatePayload)
router.delete('/delete/:id', routeController.deletePayload)

module.exports = router