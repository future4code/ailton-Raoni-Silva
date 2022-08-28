import express, { Express } from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import getUser from "./endpoints/getUser";
import getUserById from "./endpoints/getUserById";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());



app.get("/users", getUser)
app.post("/createuser", createUser)
app.get("/users/:id", getUserById)
app.put("/users/edit/:id", editUser)
app.post("/task", createTask)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});