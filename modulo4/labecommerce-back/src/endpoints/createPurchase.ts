import { Response } from 'express';
import { Request } from 'express';
import insertProduct from '../data/insertProduct';
import insertPurchase from '../data/insertPurchase';
import selectProduct from '../data/selectProduct';
import selectProducts from '../data/selectProducts';
import selectUser from '../data/selectUser';
import { purchaseData } from '../types/typesPurchase';


export default async function createPurchase(req:Request, res:Response) {
    try {

        const {userId, productId, quantity} = req.body

        if(!userId || !productId || !quantity){
            throw new Error("Os dados da compra devem ser passados!")
        }
        
        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist) {
            throw new Error("Usuário não existe")
        }

        const productAlreadyExist = await selectProduct(productId)

        if(!productAlreadyExist) {
            throw new Error("O Produto não existe")
        }

        const totalPrice = productAlreadyExist.price * quantity

        const purchase:purchaseData ={
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }
        const answer = await insertPurchase(purchase)

        res.status(201).send({ message: answer})


    } catch (error) {
      res.status(500).send("Internal server error")
    }
    
}