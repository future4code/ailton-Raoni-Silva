import { getUserPagina } from './endpoints/getPagination';
import { getUserOrder } from './endpoints/getUserOrder';
import { getUserByType } from './endpoints/getUserByType';
import { getUserByName } from './endpoints/getUserByName';

import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

export const app = express()

app.use(express.json())
app.use(cors())


app.get("/user", getUserByName)
// app.get("/user/:type", getUserByType)
// app.get("/user/:type", getUserOrder)
// app.get("/user", getUserPagina)


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})