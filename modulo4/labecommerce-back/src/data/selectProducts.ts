import { productsData } from "../types/typesProducts"
import { connection } from "./connection"

const typesProduct = (product:any) =>{
    const createProducts: productsData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }
    return createProducts
}


export default async function selectProducts(): Promise<productsData[] | undefined> {

    const result = await connection("labecommerce_products")

    const allProductType = result.map((product) => {
        return typesProduct(product)
    })

      
    return allProductType
    
}