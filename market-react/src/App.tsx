import React, { useEffect, useState } from "react";
import { getAllProducts, searchProduct } from "./services/market.services";
import { CartProvider } from "./context/cartContext";
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import ProductList from "./componentes/ProductList/ProductList";
import { Product } from "./domain/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Cargar productos iniciales
  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts); // Estado original de todos los productos
      setFilteredProducts(fetchedProducts); // Estado para productos filtrados
    };

    loadProducts();
  }, []);

  // Manejar búsqueda dinámica
  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      setFilteredProducts(products); 
    } else {
      const results = await searchProduct(query);
      setFilteredProducts(results); 
    }
  };

  return (
    <CartProvider>
      <Header onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
