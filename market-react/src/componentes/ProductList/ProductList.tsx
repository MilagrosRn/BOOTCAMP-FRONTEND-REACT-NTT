import React, { useState } from 'react';
import {Product} from "../../domain/products";
import {
  MainContainer,
  MainTitle,
  CustomSelect,
  ProductsList,
  ProductItem,
  ProductBody,
  ProductImage,
} from './ProductList.styled';
import { useCartContext } from '../../context/cartContext';
import { CategoryItem } from '../../domain/categoryItem';
import { mapCategories } from '../../shared/helpers/mapperCategories';
import { filterProducts } from '../../shared/helpers/filterByProducts';

interface ProductListProps {
    products: Product[];
  }
  
  const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const { incrementCartCount } = useCartContext();
    const categories: CategoryItem[] = mapCategories(products);
    const [selectedCategory, setSelectedCategory] = useState<string>("Todas las categorías");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const handleCategoryChange = (selectedText: string) => {
        setSelectedCategory(selectedText);
        const filtered = filterProducts(products, selectedText);
        setFilteredProducts(filtered);
      };
          
  return (
    <MainContainer>
      <div>
        <MainTitle>Nuestros productos de temporada</MainTitle>
        <CustomSelect>
          <h2>Categorías</h2>
          <select  id="categorySelect"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category.value} value={category.text}>
            {category.text}
          </option>
        ))}
      </select>
        </CustomSelect>
      </div>

      <ProductsList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductBody>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <h3 className="badge">{product.category}</h3>
              <p>{product.description}</p>
              <button id="addBtnCounter" onClick={incrementCartCount}>Agregar al carrito</button>
            </ProductBody>
            <ProductImage>
              <img src={product.thumbnail} alt={product.title} />
            </ProductImage>
          </ProductItem>
        ))}
      </ProductsList>
    </MainContainer>
  );
};

export default ProductList;
