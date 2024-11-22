import { useState } from "react";

const useCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return { cartCount, incrementCartCount };
};

export default useCart;
