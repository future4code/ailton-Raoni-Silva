import { AllPurchasesPerson } from './../types/typesPurchase';
import { userInfo } from './../types/typesUser';
import { connection } from "./connection";


type PurchasesByUser = {
    idPessoa:string,
    nomePessoa:string,
    compras:AllPurchasesPerson[]
}

export default async function selectAllPurchasesByUser(userId:string):Promise<PurchasesByUser | undefined> {

    const result = await connection.raw(`
    SELECT labecommerce_users.id as IdPerson, labecommerce_users.name as NamePerson, labecommerce_products.name as ProductName, 
    labecommerce_purchases.id as IdPuchase, labecommerce_purchases.quantity, 
    labecommerce_purchases.total_price FROM labecommerce_purchases
    inner join labecommerce_users on 
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products on
    labecommerce_purchases.product_id = labecommerce_products.id
    WHERE labecommerce_users.id = "${userId}";
`) 



    let allPurchases:AllPurchasesPerson[] = []
    let infoUser:any = {}
   


    result[0].map((person:any) =>{
            infoUser = {
            idPerson: person.IdPerson,
            namePerson: person.NamePerson
        }

        allPurchases.push({
            IdPuchase: person.IdPuchase,
            ProductName: person.ProductName,
            Quantity: person.quantity,
            totalPrice: person.total_price
            
        })
    })

    const AllPurchasesByUser: PurchasesByUser = {
        idPessoa: infoUser.idPerson,
        nomePessoa: infoUser.namePerson,
        compras: allPurchases


    }
   
    
    console.log(infoUser)
    return AllPurchasesByUser
}