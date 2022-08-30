import express, { response } from "express";
import cors from "cors";
import { Product, products } from "./data";


const app = express();
app.use(cors());
app.use(express.json());


app.get("/checkApi", (req, res)=> {
    res.status(201).send("Está funcionando a API")
})

app.get("/allproducts", (req, res)=> {
    res.send(products)
})


app.post("/createproduct", (req, res)=> {
    const { id, name, price } = req.body

    const newProduct: Product = {
        id: id,
        name: name,
        price: price
    }

    products.push(newProduct)

        res.status(201).send({
            Mensagem:"Produto Adicionado com sucesso!",
            products:products

})
});

app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003")
})


