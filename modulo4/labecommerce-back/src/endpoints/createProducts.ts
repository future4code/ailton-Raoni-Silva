import { Request, Response } from "express";
import { productInsert, productsData } from "../types/typesProducts";
import insertProduct from "./../data/insertProduct"
export default async function createProducts(req:Request, res:Response) {

        try {
            const {name, price, image_url}:productInsert = req.body

            if(!name || !price || !image_url) {
                throw new Error("Preencha todos os campos!")
            }

            const productsData:productsData = {
                id: Date.now().toString(),
                name,
                price,
                image_url
            }

            const anwser = await insertProduct(productsData)
            res.status(201).send({message:anwser})

        } catch (error: any) {
            res.status(500).send({ message: error.message });
        }
    
}