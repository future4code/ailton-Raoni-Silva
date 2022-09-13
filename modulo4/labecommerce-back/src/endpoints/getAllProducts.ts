import { Request, Response } from "express"
import selectProducts from "../data/selectProducts"



export default async function getAllProducts(req: Request, res: Response){
   try {

      const allProducts = await selectProducts()

      if(!allProducts?.length){
         throw new Error("Ainda não há produto cadastrado!")
      }

      res.status(200).send(allProducts)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}
