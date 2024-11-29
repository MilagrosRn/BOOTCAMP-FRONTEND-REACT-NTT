import { productMock, productMock2 } from "../../../__mocks__/datamock";
import { Product } from "../../../domain/products";
import { filterProducts } from "../filterByProducts";
import { mapCategories } from "../mapperCategories";


describe('filterProducts', () => {
  const mockProducts: Product[] = [
   productMock,productMock2
  ];

  it('should filter products by title', () => {
    const result = filterProducts(mockProducts, 'productmock2');
    
    expect(result).toEqual([mockProducts[1]]);
  });

  it('should filter products by description', () => {
    const result = filterProducts(mockProducts, 'productmock');
    expect(result).toEqual(mockProducts);
  });

  it('should filter products by category', () => {
    const result = filterProducts(mockProducts, 'productmock2');
    expect(result).toEqual([mockProducts[1]]);
  });

  it('should return an empty array if no match is found', () => {
    const result = filterProducts(mockProducts, 'NonExistentProduct');
    expect(result).toEqual([]);
  });

});

describe('mapCategories', () => {
  const mockProducts = [
    productMock,productMock2
  ];

  it('should return the correct formatted category list', () => {
    const result = mapCategories(mockProducts);
    expect(result).toEqual([
      { value: '0', text: 'Todas las categorías' },
      { value: '1', text: 'productMock' },
      { value: '2', text: 'productMock2' },
    ]);
  });

  it('should handle an empty list of products', () => {
    const result = mapCategories([]);
    expect(result).toEqual([{ value: '0', text: 'Todas las categorías' }]);
  });

  it('should handle products with the same category', () => {
    const productsWithSameCategory: Product[] = [
      productMock,
      { ...productMock2, category: "productMock" }, 
    ];
    const result = mapCategories(productsWithSameCategory);
    expect(result).toEqual([
      { value: '0', text: 'Todas las categorías' },
      { value: '1', text: 'productMock' },
    ]);
  });
});