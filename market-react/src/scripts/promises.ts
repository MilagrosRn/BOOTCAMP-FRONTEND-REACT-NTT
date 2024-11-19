import { Product } from "../interfaces/products";

const getAllProducts = ():Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        
        if (!response.ok) {
          
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then(res => {
        const productsShow: Product[] = res.products;  
        resolve(productsShow);
      })
      .catch((error:Error) => {
        reject(error); 
      });
  });
};

const searchProduct= async ():Promise<void>=>{
    try{ 
    const resp=  await fetch('https://dummyjson.com/products/search?q=phone')
    if (!resp.ok) {
        throw new Error('Error en la solicitud');
      }
      await resp.json();
    }

    catch(error){
        console.error('Hubo un error al buscar el producto:', error);
    }
}
export {getAllProducts,searchProduct}