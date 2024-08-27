import express from 'express'
import signupController from '../controllers/auth/signupController.js'
import loginController from '../controllers/auth/loginController.js'
import logoutController from '../controllers/auth/logoutController.js'

const router = express.Router()

router.post('/signup', (req, res) => {
    res.json({message: "Rota de POST Auth/Signup"})
})
router.post('/login', (req, res) => {
    res.json({message: "Rota de POST Auth/Login"})
})
router.post('/logout', (req, res) => {
    res.json({message: "Rota de POST Auth/Logout"})
})
router.post('/signup', signupController)
router.post('/login', loginController)
router.post('/logout', logoutController)

export default router