import { productsData } from '../types/typesProducts';
import { connection } from './connection';


export default async function insertProduct(product:productsData):Promise <string> {


    const{id, name, price, image_url} = product

    await connection("labecommerce_products")
    .insert({
       id,
       name,
       price,
       image_url
    })

    return `Produto ${name} criado com sucesso! `
}