
import { CartProvider } from "./context/cartContext";
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesComponent } from "./routes";
import { AuthProvider } from "./context/authContext.tsx/authContext";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <RoutesComponent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
