import express from 'express'
import createController from '../controllers/account/createController.js'
import getByIdController from '../controllers/getByIdController.js'
import listController from '../controllers/listController.js'
import upDateController from '../controllers/upDateController.js'
import getByIdController from '../controllers/account/getByIdController.js'
import listController from '../controllers/account/listController.js'
import updateController from '../controllers/account/updateController.js'
import removeController from '../controllers/account/removeController.js'

const router = express.Router()

router.post('/', (req, res) => {
    res.json({message: "Rota de POST Account"})
})
router.get('/list', (req, res) => {
    res.json({message: "Rota de GET Account/List"})
})
router.get('/:id', (req, res) => {
    res.json({message: "Rota de GET Account ID"})
})
router.put('/:id', (req, res) => {
    res.json({message: "Rota de PUT Account"})
})
router.delete('/:id', (req, res) => {
    res.json({message: "Rota de DELETE Account"})
})
router.post('/', createController)
router.get('/list', listController)
router.get('/:id', getByIdController)
router.put('/:id', updateController)
router.delete('/:id', removeController)

export default router