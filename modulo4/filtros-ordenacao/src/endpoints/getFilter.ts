import { Request, Response } from "express";
import { connection } from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";

export const getFilter = async (req: Request, res: Response): Promise<void> => {
 
  try {

    let nome = req.query.nome;
    let ordenacao = req.query.order
    let pagina = req.query.pagina
    const userPorPagina = 5
    const offset = userPorPagina * (Number(pagina) -1)

    if (!nome) {
      nome = "";
    }
    if(!ordenacao){
        ordenacao = "desc"
     }

  
    const result = await connection.raw(`
              SELECT * FROM aula48_exercicio
              ORDER BY title ${ordenacao}
              limit ${userPorPagina}
              offset ${offset}  
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
