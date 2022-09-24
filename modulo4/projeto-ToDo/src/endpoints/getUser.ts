import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function getUser(req: Request, res:Response) {
    try { 
        const allUsers = await connection.raw(`
        SELECT * FROM Users
        `);

        res.status(200).send(allUsers[0])

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}
    
