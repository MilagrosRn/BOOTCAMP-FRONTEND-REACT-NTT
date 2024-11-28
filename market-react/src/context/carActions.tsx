import { Product } from "../domain/products";

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "DECREMENT_FROM_CART"; payload: number }
  | { type: "CLEAR_CART" };