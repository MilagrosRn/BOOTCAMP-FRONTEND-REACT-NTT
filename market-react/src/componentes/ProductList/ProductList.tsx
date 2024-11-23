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
  Price,
  ContainerCategories,
} from './ProductList.styled';
import { CategoryItem } from '../../domain/categoryItem';
import { mapCategories } from '../../shared/helpers/mapperCategories';
import { useCartContext } from '../../context/cartContext';

interface ProductListProps {
    products: Product[];
    allProducts: Product[];
    onCategoryChange: (selectedText: string) => void; 
  }
  const ProductList: React.FC<ProductListProps> = ({ products, allProducts, onCategoryChange }) => {
    
    const { dispatch } = useCartContext(); 
    const categories: CategoryItem[] = mapCategories(allProducts);
    const [selectedCategory, setSelectedCategory] = useState<string>("Todas las categorías");
  
    const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedText = e.target.value;
      setSelectedCategory(selectedText);
      onCategoryChange(selectedText); 
    };
  
  return (
    <MainContainer>
      <ContainerCategories>
        <MainTitle>Nuestros productos de temporada</MainTitle>
        <CustomSelect>
          <h2>Categorías</h2>
          <select id="categorySelect" value={selectedCategory} onChange={handleCategorySelect}>
            {categories.map((category) => (
              <option key={category.value} value={category.text}>
                {category.text}
              </option>
            ))}
          </select>
        </CustomSelect>
      </ContainerCategories>

      <ProductsList>
  {products.map((product) => (
    <ProductItem key={product.id}>
      <ProductBody>
        <h2>
          {product.title}
          <Price>{product.price}</Price>
        </h2>
        <h3 className="badge">{product.category}</h3>
        <p>{product.description}</p>
        <button
          id="addBtnCounter"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        >
          Agregar al carrito
        </button>
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
