import { connection } from "./baseDataBase"

const updateUser = async (id: number, name: string, nickname: string): Promise<any> => {

    await connection("Users")
        .where("id", id)
        .update({
            name,
            nickname
        })
}

export default updateUser