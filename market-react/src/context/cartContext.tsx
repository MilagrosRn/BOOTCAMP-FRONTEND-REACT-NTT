import React, { createContext, useReducer, useContext } from "react";
import { Product } from "../domain/products";
import { CartState } from "../domain/carState";

type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "DECREMENT_FROM_CART"; payload: number }
  | { type: "CLEAR_CART" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          // usemos llaves es m'as f'acil de leer
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { product: action.payload, quantity: 1 }],
      };
    }
    case "DECREMENT_FROM_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        return {
          ...state,
          // igual aqu'i
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.payload
        ),
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.payload
        ),
      };
      case "CLEAR_CART": {
        return { ...state, cartItems: [] };
      }
    default:
      return state;
  }
};

const initialState: CartState = {
  cartItems: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};
