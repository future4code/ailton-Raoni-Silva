import { connection } from './connection';
import { userInsert } from "../types/typesUser";

export default async function selectUser(userId:string):Promise <userInsert | undefined>{
    
    const [result] = await connection("labecommerce_users")
    .select("*").where({id:userId})

    if(result){
    const userType:userInsert = {
        id:result.id,
        name:result.name,
        email:result.email,
        password:result.password
    }

    return userType
}else{
    return undefined
}
}