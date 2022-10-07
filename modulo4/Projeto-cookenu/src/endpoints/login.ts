import { HashManager } from "./../services/HashManager";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/Generate";
import { User } from "../Model/userTypes";

export default async function login(req: Request, res: Response) {
  try {
    const {email, password } = req.body;

    if ( !email || !password ) {
      res
        .status(422)
        .send(
          "Preencha corretamente as informações de  'email', 'password'!"
        );
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Email não cadastrado!");
    }

    const hashManager = new HashManager();
    const passwordIsCorrect = await hashManager.compare(password, user.getPassword())
   
    if(!passwordIsCorrect){
        throw new Error('Email ou senha incorretos.')
    }
    

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id: user.getId(), role: user.getRole()});

    res
      .status(201)
      .send({ message: `Login realizado com sucesso!`, token });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}