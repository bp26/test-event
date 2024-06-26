import express from 'express'
import authRouter from './authRouter.js'
import errorHandler from '../middleware/errorHandler.js'

const routes = express.Router()
routes.use('/auth', authRouter)
routes.use(errorHandler)

export default routes
