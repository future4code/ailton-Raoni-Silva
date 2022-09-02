import { userInsert } from "../types/typesUser"
import { connection } from "./connection"

const typeUser = (user:any) =>{
    const createUser: userInsert = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
    }
    return createUser
}


export default async function selectUsers(): Promise<userInsert[] | undefined> {

    const result = await connection("labecommerce_users")

    const allUserType = result.map((user) => {
        return typeUser(user)
    })

      
    return allUserType
    
}