import { Dispatch } from "react";

type CartAction =
  | { type: "INCREMENT_QUANTITY"; payload: { id: string } }
  | { type: "DECREMENT_QUANTITY"; payload: { id: string } }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } };

export const incrementItem = (dispatch: Dispatch<CartAction>, id: string) => {
  dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
};

export const decrementItem = (dispatch: Dispatch<CartAction>, id: string) => {
  dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
};

export const removeItem = (dispatch: Dispatch<CartAction>, id: string) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
};
