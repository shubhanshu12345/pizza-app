import express, { NextFunction, Request, Response } from 'express'

import { AppDataSource } from '../config/data-source'
import logger from '../config/logger'
import { AuthController } from '../controllers/AuthController'
import { User } from '../entity/User'
import { UserService } from '../services/UserService'
import registerValidator from '../validators/register-validator'
import { TokenService } from '../services/TokenService'
import { RefreshToken } from '../entity/RefreshToken'
import loginValidator from '../validators/login-validator'
import { CredentialService } from '../services/CredentialService'
import authenticate from '../middlewares/authenticate'
import { AuthRequest } from '../types'

const router = express.Router()

const userRepository = AppDataSource.getRepository(User)
const userService = new UserService(userRepository)
const refreshTokenRepository = AppDataSource.getRepository(RefreshToken)
const tokenService = new TokenService(refreshTokenRepository)
const credentialService = new CredentialService()
const authController = new AuthController(
    userService,
    logger,
    tokenService,
    credentialService,
)

// router.post('/register', (req, res) => authController.register(req, res))

// Use the middleware before your route
router.use('/register', registerValidator)

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    authController
        .register(req, res, next)
        .then(() => {
            // Do something after successful registration if needed
            // res.status(200).send('Registration successful')
        })
        .catch(() => {
            // Handle errors
            // console.error(error)
            // res.status(500).send('Internal Server Error')
        })
})

router.use('/login', loginValidator)
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    authController
        .login(req, res, next)
        .then(() => {})
        .catch(() => {})
})

router.use('/self', authenticate)

router.get('/self', async (req: Request, res: Response) => {
    try {
        // Assuming authController.self() returns a Promise
        await authController.self(req as AuthRequest, res)
        // Handle successful response
    } catch (error) {
        // Handle error
    }
})

export default router
