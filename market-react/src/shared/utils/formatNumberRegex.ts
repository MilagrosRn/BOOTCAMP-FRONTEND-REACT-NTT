export const formatPrice = (price: string | number): string => {
  // el regex deber'ia estar en un enum para estar centralizado y pueda ser usado en otros casos
    const numericPrice = parseFloat(
      price.toString().replace(/[^\d.-]/g, "") 
    );
    return numericPrice.toFixed(2); 
  };
  