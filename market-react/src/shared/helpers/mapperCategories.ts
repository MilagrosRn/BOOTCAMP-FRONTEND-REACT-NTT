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

export const filteredProductsByCategory = (products:Product[], selectedText:string):Product[] => {
  // no usar palabras m'agicas usemos enums
  if (selectedText === "Todas las categorías") {
    return products;
  }
  return products.filter((product:Product) => product.category === selectedText);
};
