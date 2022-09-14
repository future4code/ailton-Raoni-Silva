import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../types"

export interface AuthenticatorData {
    id: string
    role: USER_ROLES,
}


export class Authenticator {

    public generate(input: AuthenticatorData){
        const token = jwt.sign(input,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.EXPIRES_IN
            })
        return token
    }
    public getTokenData = (token: string): AuthenticatorData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData
        return data as AuthenticatorData
    }
}