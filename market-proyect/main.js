import {
  renderProducts,
  renderCategoriesSelectInput,
} from "./scripts/renderDOM.js";
import {
  mapCategories,
  filteredProductsByCategory,
} from "./scripts/pureFunctions.js";
import * as PromisesJS from "./scripts/promises.js";

const searchInput = document.querySelector('.searchTerm');
const categorySelect = document.getElementById("categorySelect");


//  traer productos
PromisesJS.getAllProducts()
  .then((products) => {
    renderProducts(products);
    renderCategoriesSelectInput(mapCategories(products), products);
    return products

  })
  .then((products) => {
    categorySelect.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      const selectedText =
        event.target.options[event.target.selectedIndex].text;
        
      // Renderizar los productos filtrados
      renderProducts(filteredProductsByCategory(products, selectedText));
    });


    searchInput.addEventListener('input', (event) => {
      // Convertir a minúsculas
      const query = event.target.value.toLowerCase(); 
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
      renderProducts(filteredProducts); 
    });


  })
  .catch((error) => {
    console.error(error);
  });
