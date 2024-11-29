import { CategoryItem } from "../../domain/categoryItem";
import { Product } from "../../domain/products";

export const mapCategories = (products:Product[]):CategoryItem[] => {
  
  const uniqueCategories = [...new Set(products.map((x) => x.category).flat())];
  const formattedItems:CategoryItem[] = uniqueCategories.map((item, index) => ({
    value: (index + 1).toString(),
    text: item,
  }));
  formattedItems.unshift({ value: "0", text: "Todas las categorías" });
  return formattedItems;
};
