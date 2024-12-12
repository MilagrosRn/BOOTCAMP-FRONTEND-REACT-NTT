// test??

import { CartProvider } from "./context/cartContext";
import RoutesComponent from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>  
      <CartProvider> 
        <RoutesComponent />
      </CartProvider>
    </Router>
  );

}

export default App;
