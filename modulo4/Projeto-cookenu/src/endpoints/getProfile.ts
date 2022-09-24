import { UserDatabase } from "./../data/UserDatabase";
import { Authenticator } from "./../services/Authenticator";
import { Request, Response } from "express";
import  {User} from "../Model/userTypes";

export default async function getProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("Token não enviado!");
    }

    const authenticator = new Authenticator();
    const data = authenticator.getTokenData(token);

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getById(data.id);

    res.send({
      user
    });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
