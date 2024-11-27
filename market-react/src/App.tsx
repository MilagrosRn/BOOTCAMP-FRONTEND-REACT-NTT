import { CartProvider } from "./context/cartContext";
import RoutesComponent from "./routes";

const App = () => {
  return (
    <CartProvider>
      {/* por qu'e el ; ? */}
      <RoutesComponent />;
    </CartProvider>
  );
};

export default App;
