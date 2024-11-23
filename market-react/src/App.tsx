import { CartProvider } from "./context/cartContext";
import RoutesComponent from "./routes";

const App = () => {
  return (
    <CartProvider>      
      <RoutesComponent />;
          </CartProvider>
      );

}

export default App;
