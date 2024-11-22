import styled from "styled-components";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 6px 37px -13px rgba(51, 51, 51, 0.74);
  border-radius: 2px;
  padding: 10px;
  text-align: center;
  background-color: #f4fae0;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  `;

export const Logo = styled.img`
  height: 50px;
`;

export const LogoText = styled.p`
  align-self: center;
  font-size: 0.8rem;
  margin-right: 8px;
`;

export const Search = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-right: none;
  padding: 5px;
  min-height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;

  &:focus {
    color: #ff0081;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 35px;
  border: 1px solid #ff0081;
  background: #ff0081;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;

  img {
    width: 30px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
  }
`;

export const BadgeCounter = styled.span`
  background-color: #00ba9f;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 9px;
`;
