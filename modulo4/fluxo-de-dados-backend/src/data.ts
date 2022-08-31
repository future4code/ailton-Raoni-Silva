// Crie um arquivo chamado data.ts que exporta um array de produtos.
// Cada produto será representado por um objeto com
// propriedades: id (string), name (string) e price (number).
// Popule manualmente o array com pelo menos 3 produtos.

export type Product = {
  id: string;
  name: string;
  price: number;
};

export let products: Product[] = [
  {
    id: "cel2022",
    name: "celular",
    price: 100
  },
  {
    id: "not2022",
    name: "notbook",
    price: 200
  },
  {
    id: "vent2022",
    name: "ventilador",
    price: 50
  },
];
