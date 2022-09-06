import { connection } from "./baseDataBase";


export default async function selectUser(id:number){
    const result = await connection
    .select('*')
    .from("Users")
    .where("id", id)

    return result
}