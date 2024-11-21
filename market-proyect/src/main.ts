import { CategoryItem } from './interfaces/categoryItem';
import {
    renderProducts,
    renderCategoriesSelectInput,
  } from "./scripts/renderDOM.js";
  import {
    mapCategories,
    filteredProductsByCategory,
  } from "./scripts/pureFunctions.js";
  import {Product} from "./interfaces/products.js"
  import * as PromisesJS from "./scripts/promises.js";
  
  const searchInput:HTMLElement = document.querySelector('.searchTerm')!;
  const categorySelect:HTMLElement = document.getElementById("categorySelect")!;
  
  
  //  traer productos
  // las promesas encadenadas son buenas, pero podr'ia ser m'as f'acil de leer si se separar'a en funciones y cada una use un async y await
  PromisesJS.getAllProducts()
    .then((products: Product[]) : Product[] => {
      renderProducts(products);
      renderCategoriesSelectInput(mapCategories(products));
      return products
  
    })
    .then((products:Product[]):void => {
      categorySelect.addEventListener("change", (event:Event):void => {
        const selectElement= event.target as HTMLSelectElement;
        const selectedText = selectElement.options[selectElement.selectedIndex].text;
          
        // Renderizar los productos filtrados
        renderProducts(filteredProductsByCategory(products, selectedText));
      });
  
  
      searchInput.addEventListener('input', (event:Event):void => {
        // Convertir a minúsculas
        const inputElement = event.target as HTMLInputElement;
        const query = inputElement.value.toLowerCase();
        const filteredProducts = products.filter(product => 
          product.title.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts); 
      });
  
  
    })
    .catch((error:Error) => {
      console.error(error);
    });
  