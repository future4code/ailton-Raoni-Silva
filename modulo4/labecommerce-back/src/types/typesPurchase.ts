export type purchaseInsert = {
    user_id: string,
    product_id: string,
    quantity: number
}

export type purchaseData = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
 }


 export type AllPurchasesPerson = {
    IdPuchase: string,
    ProductName: string,
    Quantity: number,
    totalPrice: number
 }