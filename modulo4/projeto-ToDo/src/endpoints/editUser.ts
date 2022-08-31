import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import selectUser from "../data/selectUser";
import updateUser from "../data/updateUser";

export default async function editUser(req:Request, res:Response) {
    try {
        const {id} = req.params
        const {name, nickname} = req.body

        if(!name || !nickname) {
            res.statusCode = 400
            throw new Error("Preencha todos os campos!")
        }
        const user = await selectUser(Number(id))
        if(!user[0]){
            res.statusCode = 404
            throw new Error("Usuário inexistente!")
        }
        await updateUser(Number(id), name, nickname)
        res.status(200).send("Usuário atualizado com sucesso!")

        

    } catch (error:any) {
        res.status(res.statusCode).send(error.message)
    }
}