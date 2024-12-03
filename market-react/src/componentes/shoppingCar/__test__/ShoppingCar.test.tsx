import React from "react";
import "@testing-library/jest-dom"
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { productMock, productMock2 } from "../../../__mocks__/datamock";
import { CartContext } from "../../../context/cartContext";
import ShoppingCar from "../shoppingCar";
import { Product } from "../../../domain/products";
import { AuthContext, AuthContextType } from "../../../context/authContext.tsx/authContext";
import { User } from "../../../domain/user";

export const MockAuthProvider = ({
  children,
  isAuthenticated = false,
  user = null,
  mockLogin = jest.fn(),
  mockLogout = jest.fn(),
}: {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  user?: User | null;
  mockLogin?: (userData: User) => void;
  mockLogout?: () => void;
}) => {
  const mockAuthValue: AuthContextType = {
    isAuthenticated,
    user,
    login: mockLogin,
    logout: mockLogout,
  };

  return (
    <AuthContext.Provider value={mockAuthValue}>
      {children}
    </AuthContext.Provider>
  );
};

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
 

  it('should increment the quantity of a product', () => {
    const mockDispatch = jest.fn();
  
    render(
      <MemoryRouter>
        <MockAuthProvider
          isAuthenticated={true}
          user={{ id: 1, username: 'testUser', email: 'test@example.com' }}
        >
          <MockCartProvider
            cartItems={[{ product: productMock, quantity: 1 }]}
            dispatch={mockDispatch}
          >
            <ShoppingCar />
          </MockCartProvider>
        </MockAuthProvider>
      </MemoryRouter>
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
      <MemoryRouter>
        <MockAuthProvider
          isAuthenticated={true}
          user={{ id: 1, username: 'testUser', email: 'test@example.com' }}
        >
          <MockCartProvider
            cartItems={[{ product: productMock, quantity: 2 }]}
            dispatch={mockDispatch}
          >
            <ShoppingCar />
          </MockCartProvider>
        </MockAuthProvider>
      </MemoryRouter>
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
      <MemoryRouter>
        <MockAuthProvider
          isAuthenticated={true}
          user={{ id: 1, username: 'testUser', email: 'test@example.com' }}
        >
          <MockCartProvider
            cartItems={[{ product: productMock, quantity: 1 }]}
            dispatch={mockDispatch}
          >
            <ShoppingCar />
          </MockCartProvider>
        </MockAuthProvider>
      </MemoryRouter>
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
      <MemoryRouter>
        <MockAuthProvider
          isAuthenticated={true}
          user={{ id: 1, username: 'testUser', email: 'test@example.com' }}
        >
          <MockCartProvider
            cartItems={[{ product: productMock, quantity: 1 }]}
            dispatch={mockDispatch}
          >
            <ShoppingCar />
          </MockCartProvider>
        </MockAuthProvider>
      </MemoryRouter>
    );
  
    const removeButton = screen.getByText('Eliminar');
    fireEvent.click(removeButton);
  
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: productMock.id,
    });
  });
  
});
