export const mapCategories = (products) => {
  // no usemos letras para nombre las variables de iteracion usemos sus nombres pero en singular es m'as legible
  const uniqueCategories = [...new Set(products.map((product) => product.category).flat())];
  const formattedItems = uniqueCategories.map((item, index) => ({
    value: `${index + 1}`,
    text: item,
  }));
  formattedItems.unshift({ value: "0", text: "Todas las categorías" });
  return formattedItems;
  // nodejar c'odigo comentado
  //   0: {value: '1', text: 'beauty'}
};

export const filteredProductsByCategory = (products, selectedText) => {
  if (selectedText === "Todas las categorías") {
    return products; // Devuelve todos los productos
  }
  return products.filter((product) => product.category === selectedText);
};
