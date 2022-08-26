import express, { Express } from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import getUser from "./endpoints/getUser";
import getUserById from "./endpoints/getUserById";
import createUser from "./endpoints/createUser";


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());



app.get("/users", getUser)
app.post("/createuser", createUser)
app.get("/users/:id", getUserById)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});