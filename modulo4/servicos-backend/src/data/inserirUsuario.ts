import { Usuario } from "../types/usuario";
import { connection } from "./connection";

export async function inserirUsuario(usuarioCadastro: Usuario) {
    try {
        
        await connection().insert({
            CEP: usuarioCadastro.CEP,
            numero: usuarioCadastro.numero,
            complemento: usuarioCadastro.complemento,
            logradouro: usuarioCadastro.logradouro,
            bairro: usuarioCadastro.bairro,
            cidade: usuarioCadastro.cidade,
            estado: usuarioCadastro.estado,   
        }).into("endereco_user")

    } catch (error:any) {
        console.log(error)
    }

}