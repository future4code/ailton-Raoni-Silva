import { app } from "./app";
import { retornaEndereco } from "./endpoints/criarEndereco";


// app.get("/busca-por-cep/:cep",retornaEndereco)
app.post("/cadastro/:cep", retornaEndereco)


