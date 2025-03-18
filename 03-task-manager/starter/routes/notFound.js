import express from 'express'
import { notFound } from '../controllers/notFound.js'

const notFoundRouter = express.Router()

notFoundRouter.get('*', notFound)

export {notFoundRouter}