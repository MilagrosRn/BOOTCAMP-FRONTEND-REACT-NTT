import { useEffect, useState } from "react";
import { getAllProducts, searchProduct } from "../services/market.services";
import { CartProvider } from "../context/cartContext";
import Header from "../componentes/header/Header";
import Footer from "../componentes/footer/Footer";
import ProductList from "../componentes/ProductList/ProductList";
import { Product } from "../domain/products";
import { filterProducts } from "../shared/helpers/filterByProducts";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  const handleSearch = async (query: string) => {
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const results = await searchProduct(query);
      setFilteredProducts(results);
    }
  };

  // Manejar filtrado por categoría
  const handleCategoryChange = (selectedText: string) => {
    const filtered = filterProducts(products, selectedText);
    setFilteredProducts(filtered);
  };
  return (
    <CartProvider>
      <Header onSearch={handleSearch} />
      <ProductList
        products={filteredProducts} 
        allProducts={products} 
        onCategoryChange={handleCategoryChange}
      />{" "}
      <Footer />
    </CartProvider>
  );
}
export default Home;