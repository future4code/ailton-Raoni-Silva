import { Request, Response } from "express";
import { requisicaoCep } from "../services/requisicaoCep";
import { Usuario } from "../types/usuario";
import { inserirUsuario } from "../data/inserirUsuario";

export async function retornaEndereco(req: Request, res: Response) {
    try {
        const cep = req.params.cep
        const {numero, complemento} = req.body

        
        if(!cep){
            res.statusCode = 404
            throw new Error("Cep nao foi passado.")
        }
       
        
       const consultaCep = await requisicaoCep(cep);
      

       if(!consultaCep){
           res.statusCode = 404
           throw new Error(`Não existe cep com o numero -> ${cep}`)
       }

       const dadosUsuario:Usuario={
            CEP: cep,
            numero: numero,
            complemento: complemento,
            bairro:consultaCep.bairro,
            cidade:consultaCep.localidade,
            estado:consultaCep.uf,
            logradouro:consultaCep.logradouro
       }

      
      await inserirUsuario(dadosUsuario)

      res.status(201).send(`Usuário criado!`)
        
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message})
    }
}