import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px;
  box-shadow: 10px 6px 37px -13px rgba(51, 51, 51, 0.74);
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;
export const ContainerCategories = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomSelect = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-evenly;
  select {
    padding: 8px;
    font-size: 16px;
    width: 50%;
  }
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductItem = styled.li`
  border-radius: 15px;
  display: flex;
  width: 49%;
  margin: 0 0 15px;
  font-size: 16px;
  background: #b5bd97;
  padding: 2%;
  overflow: hidden;
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const Price = styled.span`
  color: white;
  font-weight: bold;
  margin-left: 8px;
`;

export const ProductBody = styled.div`
  padding: 16px;

  h2 {
    font-size: 18px;
  }

  p {
    margin: 0 0 8px;
    color: white;
  }

  .badge {
    display: inline-block;
    padding: 0.4em 1em;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
    background-color: #00ba9f;
    border-radius: 12px;
    text-transform: uppercase;
    margin: 17px;
  }

  button {
    font-family: "Helvetica", "Arial", sans-serif;
    display: inline-block;
    font-size: 1em;
    padding: 16px;
    margin-bottom: 1%;
    appearance: none;
    background-color: #ff0081;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
  }
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 200px;
    height: auto;
  }
`;
