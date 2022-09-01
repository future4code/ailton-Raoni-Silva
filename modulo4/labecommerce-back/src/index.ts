
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import getAllUsers from "./endpoints/getAllUsers"
import createUser from "./endpoints/createUser"


export const app = express()

app.use(express.json())
app.use(cors())

app.post("/user", createUser)
app.get("/users", getAllUsers)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})