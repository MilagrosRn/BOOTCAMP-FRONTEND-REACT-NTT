import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext, CartProvider } from "../../../context/cartContext";
import Header from "../Header";
import "@testing-library/jest-dom";
import React, { ReactNode } from "react";
import { productMock, productMock2 } from "../../../__mocks__/datamock";
import { CartItem } from "../../../domain/carItem";


interface MockCartProviderProps {
  children: ReactNode;
  cartItems?: CartItem[];
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

const MockCartProvider: React.FC<MockCartProviderProps> = ({children, cartItems = []}) => {

  const mockState = {cartItems};
  const mockDispatch = jest.fn();

  return (
    <CartContext.Provider value={{ state: mockState, dispatch: mockDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

describe("Header Component", () => {
 
  it("should calculate the cart count based on cart items", () => {
    const mockCartItems = [
      { product: productMock, quantity: 2 },
      { product: productMock2, quantity: 3 },
    ];

    render(
      <MockCartProvider cartItems={mockCartItems}>
        <Header onSearch={() => {}} />
      </MockCartProvider>
    );

    const cartCount = screen.getByText("5");
    expect(cartCount).toBeInTheDocument();
    expect(cartCount).toHaveTextContent("5");
  });
  it('should display the initial cart count as 0', () => {
    render(
      <MockCartProvider cartItems={[]}>
        <Header onSearch={() => {}} />
      </MockCartProvider>
    );

    const cartCount = screen.getByText('0');
    expect(cartCount).toBeInTheDocument();
  });

  it("should call onSearch when typing in the search input", () => {
    const handleSearch = jest.fn();
    render(
      <CartProvider>
        <Header onSearch={handleSearch} />
      </CartProvider>
    );

    const searchInput = screen.getByPlaceholderText("¿Qué producto buscas?");
    fireEvent.change(searchInput, { target: { value: "planta" } });

    expect(handleSearch).toHaveBeenCalledWith("planta");
  });
});
