import { Logo, LogoText } from "../header/Header.styled";
import { HeaderElement, TittleCointainer } from "./shoppingCar.styled";
const ShoppingCar: React.FC = () => {
  return (
    <HeaderElement>

     <Logo alt="Logo Plantas" src="../assets/plantas.png" />
      <LogoText>Market Plants</LogoText>
      <TittleCointainer>
        <h1>Resumen de Carrito</h1></TittleCointainer>
    </HeaderElement>
  );
};
export default ShoppingCar;
