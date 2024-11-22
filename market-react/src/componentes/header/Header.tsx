import React, { useRef} from 'react';
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
} from "./Header.styled"; // Cambia la ruta según sea necesario

interface HeaderProps {
    onSearch: (query: string) => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const { cartCount } = useCartContext();
    const badgeCounterRef = useRef<HTMLSpanElement>(null);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      onSearch(query); 
    };
  
  return (
    <HeaderElement>
    <LeftContainer>
      <Logo alt="Logo Plantas" src="../assets/plantas.png" />
      <LogoText>Market Plants</LogoText>
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
      <BadgeCounter ref={badgeCounterRef}>{cartCount}</BadgeCounter>
      <Logo alt="Icono Tienda" src="../assets/tienda-de-comestibles.png" />
    </RightContainer>
  </HeaderElement>
  );
};

export default Header;
