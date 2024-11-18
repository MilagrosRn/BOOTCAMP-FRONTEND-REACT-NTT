let productsShow = [];

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then(res => {
        productsShow = res.products;  // Guardamos los productos en la variable
        resolve(productsShow);  // Resolvemos la promesa con los productos
      })
      .catch(error => {
        reject(error);  // Rechazamos la promesa si ocurre un error
      });
  });
};
const getAllCategories = () => {
  return new Promise((resolve, reject) => {})
}
const searchProduct= async ()=>{
    try{ 
    const resp=  await fetch('https://dummyjson.com/products/search?q=phone')
    if (!resp.ok) {
        throw new Error('Error en la solicitud');
      }
    const data= await resp.json()
    console.log(data)
    }

    catch(error){
        console.error('Hubo un error al buscar el producto:', error);
    }
}
// uso de la función then y catch tambien
// getAllProducts()
//   .then(products => {
//     console.log('Productos cargados:', products);
//   })
//   .catch(error => {
//     console.error('Hubo un error:', error);
//   });

export {productsShow,getAllProducts,searchProduct}