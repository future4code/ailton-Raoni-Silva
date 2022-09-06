import { Response, Request } from "express";
import selectAllPurchasesByUser from "../data/selectAllPurchasesByUser";
import selectUser from "../data/selectUser";

export default async function getPurchasesByUser(req: Request, res:Response) {

    try {

        const userId =req.params.userId

        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist) {
            throw new Error("Usuário não existe")
        }

       const allPurchases = await selectAllPurchasesByUser(userId)

       if(!allPurchases?.compras.length){
           throw new Error(`Usuário não efetuou nenhuma compra!`)
       }

       res.status(200).send(allPurchases)
        
    } catch (error) {
        res.status(500).send("Internal server error")
     }
    
}