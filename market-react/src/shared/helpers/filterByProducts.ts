import { Product } from "../../domain/products";

export const filterProducts = (
    products: Product[],
    query: string
  ): Product[] => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  };