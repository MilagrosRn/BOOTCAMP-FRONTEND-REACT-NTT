// test?
import { CartState } from "../domain/carState";
import { CartAction } from "./carActions";

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingItem = state.cartItems.find(
          (item) => item.product.id === action.payload.id
        );
  
        if (existingItem) {
          return {
            ...state,
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
  