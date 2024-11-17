import * as Counter from "./counter.js";
import * as PromisesJS from "./promises.js";

const productsList = document.getElementById("productsList");

PromisesJS.getAllProducts()
  .then((products) => {
    // Limpiar el contenedor eliminando todos sus hijos
    while (productsList.firstChild) {
      productsList.removeChild(productsList.firstChild);
    }

    products.forEach((product) => {
      const card = document.createElement("li");
      card.classList.add("check-card-item"); // Añadir clase de estilo a la card

      // contenedor
      const container = document.createElement("div");
      container.classList.add("check-card-body");

      // titulo
      const title = document.createElement("h2");
      title.textContent = product.title;
      title.classList.add("check-card-title");

      // precio
      const price = document.createElement("p");
      price.textContent = `€${product.price}`;
      price.classList.add("check-card-description");
      // categoria
      const category = document.createElement("p");
      category.textContent = product.tags;
      category.classList.add("badge");
      // descripion
      const description = document.createElement("p");
      description.textContent = product.description;
      description.classList.add("product-description");
      // boton
      const btnAdd = document.createElement("button");
      btnAdd.textContent = "Agregar al carrito";
      btnAdd.classList.add("bubbly-button");
      btnAdd.setAttribute("id", "addBtnCounter");

      // img
      const containerImg = document.createElement("div");
      containerImg.classList.add("check-card-body-in");

      const img = document.createElement("img");
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

      // Finalmente, agregar la card al contenedor de productos
      productsList.appendChild(card);
    });
  })
  .catch((error) => {
    // En caso de error, agregar un mensaje de error al contenedor
    const errorLi = document.createElement("li");
    const errorText = document.createTextNode("Error al cargar los productos.");
    errorLi.appendChild(errorText);
    productsList.appendChild(errorLi);
    console.error(error);
  });
