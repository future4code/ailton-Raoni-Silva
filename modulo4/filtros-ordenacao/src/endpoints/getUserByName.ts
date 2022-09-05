import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
 
  try {

    let nome = req.query.nome;


    if (!nome) {
      nome = "";
    }
  
    const result = await connection.raw(`
              SELECT * FROM aula48_exercicio WHERE name LIKE "%${nome}%"
      
      `);



    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(result[0]);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
