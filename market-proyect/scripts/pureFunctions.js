export const mapCategories = (products) => {
  const uniqueCategories = [...new Set(products.map((x) => x.category).flat())];
  const formattedItems = uniqueCategories.map((item, index) => ({
    value: (index + 1).toString(),
    text: item,
  }));
  formattedItems.unshift({ value: "0", text: "Todas las categorías" });
  return formattedItems;
  //   0: {value: '1', text: 'beauty'}
};

export const filteredProductsByCategory = (products, selectedText) => {
  if (selectedText === "Todas las categorías") {
    return products; // Devuelve todos los productos
  }
  return products.filter((product) => product.category === selectedText);
};
