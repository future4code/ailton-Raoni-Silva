import { connection } from "./baseDataBase";


const insertTask = async (newTask:any): Promise<any> => {

        await connection
        .insert(newTask)
        .into("Task")
    
}

export default insertTask