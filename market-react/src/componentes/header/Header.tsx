import React, { useRef} from 'react';
import { useCartContext } from '../../context/cartContext';

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
    <header className="header">
      <div className="left-container">
        <img className="logo" alt="Logo Plantas" src="../assets/plantas.png" />
        <p className="logo-txt">Market Plants</p>
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="¿Qué producto buscas?"
            onChange={handleInputChange}
          />
          <button
            id="searchButton"
            className="searchButton"
            type="submit"
          >
            <img src="../assets/lupa.png" alt="Buscar" />
          </button>
        </div>
      </div>
      <div className="right-container">
        <span
          id="badgeCounter"
          className="badge-counter"
          ref={badgeCounterRef} 
        >{cartCount}
        </span>
        <img
          className="logo"
          alt="Icono Tienda"
          src="../assets/tienda-de-comestibles.png"
        />
      </div>
    </header>
  );
};

export default Header;
