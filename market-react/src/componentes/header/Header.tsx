import React, { useRef} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from '../../context/cartContext';
import {
  HeaderElement,
  LeftContainer,
  Logo,
  LogoText,
  Search,
  SearchInput,
  SearchButton,
  RightContainer,
  BadgeCounter,
  LogoutButton,
} from "./Header.styled"; 
import { useAuth } from '../../context/authContext.tsx/authContext';
interface HeaderProps {
    onSearch: (query: string) => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const badgeCounterRef = useRef<HTMLSpanElement>(null);
    const { state } = useCartContext();
    const { logout, user } = useAuth(); 
    const navigate = useNavigate();
  
    const cartCount = state.cartItems.reduce((total, item) => total + item.quantity, 0);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      onSearch(query);
    };
  
    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      logout();
      navigate("/login"); 
    };
  
    return (
      <HeaderElement>
        <LeftContainer>
          <Logo alt="Logo Plantas" src="../assets/plantas.png" />
          <LogoText>{user ? `Bienvenido: ${user.username}` : "Market Plants"}</LogoText>
          <Search>
            <SearchInput
              type="text"
              placeholder="¿Qué producto buscas?"
              onChange={handleInputChange}
            />
            <SearchButton type="submit">
              <img src="../assets/lupa.png" alt="Buscar" />
            </SearchButton>
          </Search>
        </LeftContainer>
        <RightContainer>
          <Link to="/resumen">
            <BadgeCounter ref={badgeCounterRef}>{cartCount}</BadgeCounter>
            <Logo alt="Icono Tienda" src="../assets/tienda-de-comestibles.png" />
          </Link>
          {user && (
          <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
        )}
        </RightContainer>
      </HeaderElement>
    );
  };
  
  export default Header;
