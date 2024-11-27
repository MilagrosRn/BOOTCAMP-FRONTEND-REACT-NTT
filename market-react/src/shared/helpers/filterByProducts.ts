import { Product } from "../../domain/products";

export const filterProducts = (
  products: Product[],
  query: string
): Product[] => {
  return products.filter(({ title, description, category }) =>
    [
      title.toLowerCase(),
      description.toLowerCase(),
      category.toLowerCase(),
    ].includes(query)
  );
};
