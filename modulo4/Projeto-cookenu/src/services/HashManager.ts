import * as bcryptjs from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {

    async hash(senha: string): Promise<string> {

        const rounds = Number(process.env.COST);
        const salt = await bcryptjs.genSalt(rounds);
        const hash = await bcryptjs.hash(senha, salt)
        return hash
    }

    async compare(text: string, hash: string): Promise<boolean> {
        return bcryptjs.compare(text, hash)
    }
}
