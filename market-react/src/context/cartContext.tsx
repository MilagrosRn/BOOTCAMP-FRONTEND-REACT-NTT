import useCart from "./useCart";
import React, { createContext, useContext } from "react";

interface CartContextProps {
  cartCount: number;
  incrementCartCount: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cartCount, incrementCartCount } = useCart();

  return (
    <CartContext.Provider value={{ cartCount, incrementCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe ser usado dentro de CartProvider");
  }
  return context;
};
