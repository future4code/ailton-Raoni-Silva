import { HashManager } from "./../services/HashManager";
import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/Generate";
import { User } from "../Model/userTypes";

export default async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      throw new Error(
          "Preencha corretamente as informações de 'name', 'email', 'password', 'role'!"
        );
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (user) {
      res.status(409).send("Email já cadastrado!");
    }

    if (password.length < 6) {
      throw new Error("A senha deve conter pelo menos 6 caracters.");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword, role);
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id, role });

    res
      .status(201)
      .send({ message: `Usuário(a) ${name} criado com sucesso!`, token });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
