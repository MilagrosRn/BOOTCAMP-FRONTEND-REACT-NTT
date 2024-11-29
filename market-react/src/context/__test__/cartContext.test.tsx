import '@testing-library/jest-dom';
import { CartState } from "../../domain/carState";
import { CartAction } from "../carActions";
import { cartReducer } from "../carReducer";
import { productMock } from "../../__mocks__/datamock";
import { renderHook } from '@testing-library/react';
import { useCartContext } from "../cartContext";

describe("Cart Reducer ADD_TO_CART", () => {
  const initialState: CartState = {
    cartItems: [],
  };
  it("should add a new product to the cart when it does not exist", () => {
    const action: CartAction = {
      type: "ADD_TO_CART",
      payload: productMock,
    };

    const newState = cartReducer(initialState, action);

    expect(newState.cartItems).toHaveLength(1);
    expect(newState.cartItems[0]).toEqual({
      product: productMock,
      quantity: 1,
    });
  });

  it("should increase the quantity of an existing product in the cart", () => {
    const initialStateWithProduct: CartState = {
      cartItems: [{ product: productMock, quantity: 1 }],
    };

    const action: CartAction = {
      type: "ADD_TO_CART",
      payload: productMock,
    };

    const newState = cartReducer(initialStateWithProduct, action);

    expect(newState.cartItems).toHaveLength(1);
  });
});

describe("Cart Reducer DECREMENT_FROM_CART", () => {
  const initialState: CartState = {
    cartItems: [{ product: productMock, quantity: 1 }],
  };

  it("should decrement the quantity of an existing product", () => {
    const action: CartAction = {
      type: "DECREMENT_FROM_CART",
      payload: 1,
    };

    const newState = cartReducer(initialState, action);

    expect(newState.cartItems).toHaveLength(0);
  });
});
describe("Cart Reducer CLEAR_CART", () => {
  const initialState: CartState = {
    cartItems: [{ product: productMock, quantity: 2 }],
  };

  it("should clear all items from the cart", () => {
    const action: CartAction = {
      type: "CLEAR_CART",
    };

    const newState = cartReducer(initialState, action);
    expect(newState.cartItems).toHaveLength(0);
  });
});

describe("Cart Reducer REMOVE_FROM_CART", () => {
  it('should not change the cart if the product to remove does not exist', () => {
    const initialStateWithItems: CartState = {
      cartItems: [
        { product: productMock, quantity: 2 },
      ],
    };
  
    const action: CartAction = {
      type: 'REMOVE_FROM_CART',
      payload: 2, 
      
    };
  
    const newState = cartReducer(initialStateWithItems, action);
    expect(newState.cartItems).toEqual(initialStateWithItems.cartItems);
  });
});
describe('useCartContext handle error', () => {
  it("should throw an error when used outside of CartProvider", () => {
    const { result } = renderHook(() => {
      try {
        return useCartContext();
      } catch (error) {
        return error; 
      }
    });
    expect(result.current).toEqual(
      new Error("useCartContext debe usarse dentro de un CartProvider")
    );
  });
});