// import { Product } from "../domain/products";

// type CartAction =
//   | { type: "ADD_TO_CART"; payload: Product }
//   | { type: "REMOVE_FROM_CART"; payload: number }
//   | { type: "INCREMENT_QUANTITY"; payload: number }
//   | { type: "DECREMENT_QUANTITY"; payload: number };

// interface CartState {
//   cartItems: { product: Product; quantity: number }[];
// }

// export const cartReducer = (state: CartState, action: CartAction): CartState => {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const existingItem = state.cartItems.find(
//         (item) => item.product.id === action.payload.id
//       );

//       if (existingItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((item) =>
//             item.product.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }

//       return {
//         ...state,
//         cartItems: [
//           ...state.cartItems,
//           { product: action.payload, quantity: 1 },
//         ],
//       };
//     }

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item.product.id !== action.payload
//         ),
//       };

//     case "INCREMENT_QUANTITY":
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.product.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };

//     case "DECREMENT_QUANTITY":
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) =>
//           item.product.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };
