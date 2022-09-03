import { Request, Response } from "express";
import insertTask from "../data/insertTask";
import { NewTask } from "../types";


const createTask =async (req:Request, res:Response) => {

    try {

        const {title, description, limit_date, creator_user_id} = req.body
        const transformDate = limit_date.split("/")
        const newDate = new Date(`${transformDate[2]}-${transformDate[1]}-${transformDate[0]}`)

        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 400
            throw new Error("Preencha todos os campos!")

        }

        const newTask: NewTask = {
            title,
            description,
            limit_date:newDate,
            creator_user_id
        }

        await insertTask(newTask)
        res.status(201).send("Tarefa criada com sucesso!")
    }

    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
    
}

export default createTask