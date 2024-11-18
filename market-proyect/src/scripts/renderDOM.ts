import { CategoryItem } from "@/interfaces/categoryItem";
import { Product } from "@/interfaces/products";

const productsList: HTMLElement = document.getElementById('productsList')!; 
const categorySelect:HTMLElement = document.getElementById('categorySelect')!;
const badgeCounter:HTMLElement = document.getElementById('badgeCounter')!;
let cartCount: number = 0;

export const renderProducts=(products:Product[]):void =>{
    
    while (productsList.firstChild) {
      productsList.removeChild(productsList.firstChild);
    } 
    
    products.forEach((product:Product) => {
       
    const card:HTMLElement = document.createElement("li");
    card.classList.add("check-card-item");
     // contenedor
     const container:HTMLDivElement  = document.createElement("div");
     container.classList.add("check-card-body");

     // titulo
     const title:HTMLElement = document.createElement("h2");
     title.textContent = product.title;
     title.classList.add("check-card-title");

     // precio
     const price:HTMLElement = document.createElement("p");
     price.textContent = `€${product.price}`;
     price.classList.add("check-card-description");
     // categoria
     const category:HTMLElement = document.createElement("p");
     category.textContent = product.tags.toString();
     category.classList.add("badge");
     // descripion
     const description:HTMLElement = document.createElement("p");
     description.textContent = product.description;
     description.classList.add("product-description");
     // boton
     const btnAdd:HTMLButtonElement = document.createElement("button");
     btnAdd.textContent = "Agregar al carrito";
     btnAdd.classList.add("bubbly-button");
     btnAdd.setAttribute("id", "addBtnCounter");

     // img
     const containerImg:HTMLDivElement = document.createElement("div");
     containerImg.classList.add("check-card-body-in");

     const img:HTMLImageElement = document.createElement("img");
     img.src = "assets/imgPredeterminada.JPG";
     img.classList.add("img-prod");

      container.appendChild(title);
      container.appendChild(category);
      container.appendChild(price);
      container.appendChild(description);
      container.appendChild(btnAdd);
      containerImg.appendChild(img);
  
      card.appendChild(container);
      card.appendChild(containerImg);
  
      productsList.appendChild(card);

    });

    const addToCartButtons = document.querySelectorAll('.bubbly-button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartCount++;
        badgeCounter.textContent = cartCount.toString();
      });
    });
  }

  export const renderCategoriesSelectInput =(formattedItems:CategoryItem[])=>{   
    formattedItems.forEach((optionData:CategoryItem) => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text; 
        categorySelect.appendChild(option);
    });
   
}
