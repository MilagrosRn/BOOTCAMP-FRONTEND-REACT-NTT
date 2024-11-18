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
        productsShow = res.products;  
        resolve(productsShow);
      })
      .catch(error => {
        reject(error); 
      });
  });
};

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
export {productsShow,getAllProducts,searchProduct}