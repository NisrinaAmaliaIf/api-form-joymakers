const express = require('express')
const router = express.Router()

const formcontroller = require('../controllers/forms')

router.get('/forms', formcontroller.index)

router.get('/form/:id', formcontroller.show)
  
  router.post('/form', formcontroller.store)
  
  router.put('/form/:id', formcontroller.update)
  
  router.delete('form/:id', formcontroller.delete)

  module.exports = router