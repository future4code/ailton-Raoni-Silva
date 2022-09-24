import { purchaseData } from "./../types/typesPurchase";
import { connection } from "./connection";

export default async function insertPurchase(
  purchase: purchaseData
): Promise<string> {
  const { id, userId, productId, quantity, totalPrice } = purchase;

  const result = await connection("labecommerce_purchases").insert({
    id,
    user_id: userId,
    product_id: productId,
    quantity,
    total_price: totalPrice,
  });

  return `Compra do ID ${purchase.id} realizada com sucesso!`;
}
