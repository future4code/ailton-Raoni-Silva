import {Request, Response} from "express";
import selectUser from "../data/selectUser";

export default async function getUserById(req:Request, res:Response){
    try {
        const {id} = req.params

        const user = await selectUser(Number(id))

        res.status(200).send(user)

    } catch (error:any) {
        res.status(400).send({ message: error.message || error.sqlMessage})
        
    }
} 