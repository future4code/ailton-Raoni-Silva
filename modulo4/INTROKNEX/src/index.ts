import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercicio 01

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `);

  return result[0][0];
};
// (async () => {
// console.log(await getActorByName("Tony Ramos") )
// })()

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

  const count = result[0][0].count;
  return count;
};
// (async () => {
//   console.log(await countActors("female"));
// })();

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
    .update({
        salary:salary,
    })
    .where("id", id)
}

const deleteActor = async (id:string,): Promise<any> => {
    await connection("Actor")
    .delete()
    .where("id", id)
}

const avgGenderActor = async (gender:string): Promise<any> => {
   const result = await connection("Actor")
    .avg("salary as average")
    .where({gender});
    
   return result[0].average 
}

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

   
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
