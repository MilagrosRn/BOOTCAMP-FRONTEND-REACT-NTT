export const formatPrice = (price: string | number): string => {
    const numericPrice = parseFloat(
      price.toString().replace(/[^\d.-]/g, "") 
    );
    return numericPrice.toFixed(2); 
  };
  