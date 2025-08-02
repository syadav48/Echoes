const express = require("express")
const router = express.Router()

const {getAllPersons, updateAPerson, deleteAPerson, addPerson, getAPerson, getbyLimit, getbirthDayMonth} = require('../controllers/useController')

router.get('/persons', getbyLimit)
router.post('/addperson', addPerson)
router.post('/updatePerson/:id', updateAPerson)
router.get('/persons/:id', getAPerson);
router.get('/persons/birthday', getbirthDayMonth);
router.delete('/persons/:id', deleteAPerson);


module.exports = router

