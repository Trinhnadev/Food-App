import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controller/cartController.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post("/add-to-cart",authMiddleware,addToCart)
cartRouter.post("/remove-item",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)


export default cartRouter