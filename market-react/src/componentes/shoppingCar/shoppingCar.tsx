import { useCartContext } from "../../context/cartContext";
import { Product } from "../../domain/products";
import { formatPrice } from "../../shared/utils/formatNumberRegex";
import { Logo, LogoText } from "../header/Header.styled";
import { CartContainer, HeaderElement, QuantityControls, RemoveButton, Table, TittleCointainer, TotalContainer, } from "./shoppingCar.styled";


const ShoppingCar: React.FC = () => {

  const { state, dispatch } = useCartContext();
  const handleIncrement = (product:Product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
  };
  

  const handleDecrement = (id: number) => {
    dispatch({ type: "DECREMENT_FROM_CART", payload: id });
  };  

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const totalPrice = state.cartItems.reduce((total, item) => {
    return total + parseFloat(formatPrice(item.product.price)) * item.quantity;
  }, 0);
  
  return (
    <><HeaderElement>

      <Logo alt="Logo Plantas" src="../assets/plantas.png" />
      <LogoText>Market Plants</LogoText>
      <TittleCointainer>
        <h1>Resumen de Carrito</h1></TittleCointainer>
    </HeaderElement><CartContainer>
        <Table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {state.cartItems.map((item) => (
              <tr key={item.product.id}>
                <td>
                  <img src={item.product.thumbnail} alt={item.product.title} />
                </td>
                <td>{item.product.title}</td>
                S/ {formatPrice(item.product.price)}      <td>
                  <QuantityControls>
                    <button
                      onClick={() => handleIncrement(item.product)}
                      // por que >=10 tal vez usar una funci'on para encapsularlo
                      disabled={item.quantity >= 10}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    {/* // por qu'e' > 1? */}
                    <button
                      onClick={() => item.quantity > 1
                        ? handleDecrement(item.product.id)
                        : handleRemove(item.product.id)}
                    >
                      -
                    </button>
                  </QuantityControls>
                </td>
                <td>
                  <RemoveButton onClick={() => handleRemove(item.product.id)}>
                    Eliminar
                  </RemoveButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TotalContainer>Total: S/ {totalPrice.toFixed(2)}</TotalContainer>
      </CartContainer></>
  );
};
export default ShoppingCar;
