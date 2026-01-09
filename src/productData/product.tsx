import type { IProduct } from "../types/product";

export const ITEMS = {
  BREAD: "Bread",
  MILK: "Milk",
  SOUP: "Soup",
  CHEESE: "Cheese",
  BUTTER: "Butter",
};

export const products: IProduct[] = [
  {
    id: 1,
    name: ITEMS.BREAD,
    price: 1.1,
  },
  {
    id: 2,
    name: ITEMS.MILK,
    price: 0.5,
  },
  {
    id: 3,
    name: ITEMS.CHEESE,
    price: 0.9,
  },
  {
    id: 4,
    name: ITEMS.SOUP,
    price: 0.6,
  },
  {
    id: 5,
    name: ITEMS.BUTTER,
    price: 1.2,
  },
];
