import React from "react";
import "@testing-library/jest-dom"

import { render, screen, fireEvent } from "@testing-library/react";
import { productMock, productMock2 } from "../../../__mocks__/datamock";
import { CartContext } from "../../../context/cartContext";
import ShoppingCar from "../shoppingCar";
import { Product } from "../../../domain/products";

  const MockCartProvider = ({
    children,
    cartItems = [],
    dispatch = jest.fn(),
  }: {
    children: React.ReactNode;
    cartItems?: { product: Product; quantity: number }[];
    dispatch?: React.Dispatch<any>;
  }) => {
    const mockState = {
      cartItems,
    };
  
    return (
      <CartContext.Provider value={{ state: mockState, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  };

describe('ShoppingCar Component', () => {
  it('should render the initial cart with no items', () => {
    render(
      <MockCartProvider cartItems={[]}>
        <ShoppingCar />
      </MockCartProvider>
    );

    expect(screen.getByText(/Resumen de Carrito/i)).toBeInTheDocument();
    expect(screen.getByText(/Total: S\/ 0.00/)).toBeInTheDocument();
  });

  it('should display products in the cart', () => {
    render(
      <MockCartProvider
        cartItems={[
          { product: productMock, quantity: 1 },
          { product: productMock2, quantity: 2 },
        ]}
      >
        <ShoppingCar />
      </MockCartProvider>
    );

    expect(screen.getByText('productMock')).toBeInTheDocument();
    expect(screen.getByText('productMock2')).toBeInTheDocument();
    expect(screen.getByText('S/ 2.00')).toBeInTheDocument();
    expect(screen.getByText('S/ 3.00')).toBeInTheDocument();

    expect(screen.getByText(/Total: S\/ 8.00/)).toBeInTheDocument();
  });

  it('should increment the quantity of a product', () => {
    const mockDispatch = jest.fn();

    render(
        <MockCartProvider
        cartItems={[{ product: productMock, quantity: 1 }]}
        dispatch={mockDispatch} 
        >
        <ShoppingCar />
        </MockCartProvider>
    );

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    expect(mockDispatch).toHaveBeenCalledWith({
        type: 'ADD_TO_CART',
        payload: productMock, 
    });
  });

  it('should decrement the quantity of a product', () => {
    const mockDispatch = jest.fn();
  
    render(
      <MockCartProvider
        cartItems={[{ product: productMock, quantity: 2 }]}
        dispatch={mockDispatch}
      >
        <ShoppingCar />
      </MockCartProvider>
    );
  
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
  
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'DECREMENT_FROM_CART',
      payload: productMock.id,
    });
  });
  
  it('should remove a product if quantity is 1 and decrement is clicked', () => {
    const mockDispatch = jest.fn(); 
  
    render(
      <MockCartProvider
        cartItems={[{ product: productMock, quantity: 1 }]} 
        dispatch={mockDispatch}
      >
        <ShoppingCar />
      </MockCartProvider>
    );
  
    const decrementButton = screen.getByText('-'); 
    fireEvent.click(decrementButton);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: productMock.id,
    });
  });
  

  it('should remove a product from the cart', () => {
    const mockDispatch = jest.fn();
  
    render(
      <MockCartProvider
        cartItems={[{ product: productMock, quantity: 1 }]}
        dispatch={mockDispatch}
      >
        <ShoppingCar />
      </MockCartProvider>
    );
  
    const removeButton = screen.getByText('Eliminar');
    fireEvent.click(removeButton);
  
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: productMock.id,
    });
  });
  
});
