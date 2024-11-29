import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext, CartProvider } from "../../../context/cartContext";
import { productMock, productMock2 } from "../../../__mocks__/datamock";
import ProductList from "../ProductList";
import Header from "../../header/Header";
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

const allProductsMock = [productMock, productMock2];

describe("ProductList Component", () => {
  it("should render the list of products correctly", () => {
    render(
      <MockCartProvider>
        <ProductList
          products={[productMock]}
          allProducts={allProductsMock}
          onCategoryChange={() => {}}
        />
      </MockCartProvider>
    );

    const productPrices = screen.getAllByText("2");
    const productDescriptions = screen.getAllByText("productMock");

    const productTitles = screen.getAllByText("productMock");
    expect(productTitles[0]).toBeInTheDocument();
    expect(productPrices[0]).toBeInTheDocument();
    expect(productDescriptions[0]).toBeInTheDocument();
  });

  it("should call onCategoryChange when a new category is selected", () => {
    const mockCategoryChange = jest.fn();

    render(
      <MockCartProvider>
        <ProductList
          products={[productMock]}
          allProducts={allProductsMock}
          onCategoryChange={mockCategoryChange}
        />
      </MockCartProvider>
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "productMock2" } });

    expect(mockCategoryChange).toHaveBeenCalledWith("productMock2");
  });

  it('should add a product to the cart when the "Agregar al carrito" button is clicked', async () => {
    const mockDispatch = jest.fn();

    render(
      <MockCartProvider dispatch={mockDispatch}>
        <ProductList
          products={[productMock]}
          allProducts={allProductsMock}
          onCategoryChange={() => {}}
        />
      </MockCartProvider>
    );

    const addButton = screen.getByText("Agregar al carrito");
    fireEvent.click(addButton);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_TO_CART",
      payload: productMock,
    });
  });

  it("should render categories in the select dropdown", () => {
    render(
      <MockCartProvider>
        <ProductList
          products={[productMock]}
          allProducts={allProductsMock}
          onCategoryChange={() => {}}
        />
      </MockCartProvider>
    );

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    expect(options[0]).toHaveTextContent("Todas las categorías");
    expect(options[1]).toHaveTextContent("productMock");
    expect(options[2]).toHaveTextContent("productMock2");
  });
});
