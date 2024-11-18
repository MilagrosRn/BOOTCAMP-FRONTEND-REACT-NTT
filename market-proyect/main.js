import {
  renderProducts,
  renderCategoriesSelectInput,
} from "./scripts/renderDOM.js";
import {
  mapCategories,
  filteredProductsByCategory,
} from "./scripts/pureFunctions.js";
import * as PromisesJS from "./scripts/promises.js";

// const productsList = document.getElementById("productsList");
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
  })
  .catch((error) => {
    console.error(error);
  });
