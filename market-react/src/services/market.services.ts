import { Product } from "../domain/products";
  
  export const getAllProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://dummyjson.com/products');
  
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const res = await response.json();
      return res.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        price: `${product.price} €`,
        category: product.category,
        description: product.description,
        thumbnail: product.thumbnail,
      }));
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Error desconocido');
    }
  };

  export const searchProduct = async (query: string): Promise<Product[]> => {
    try {
      const resp = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      if (!resp.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await resp.json();
      return data.products;
    } catch (error) {
      
      console.error("Hubo un error al buscar el producto:", error);
      return [];
    }
  };
  
  