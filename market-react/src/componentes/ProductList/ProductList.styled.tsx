import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CustomSelect = styled.div`
  margin-bottom: 20px;

  select {
    padding: 8px;
    font-size: 16px;
  }
`;

export const ProductsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
`;

export const ProductItem = styled.li`
  flex: 0 1 calc(33.333% - 20px);
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductBody = styled.div`
  padding: 16px;

  h2 {
    font-size: 18px;
    margin: 0 0 8px;
  }

  p {
    margin: 0 0 8px;
  }

  .badge {
    display: inline-block;
    background: #7d9561;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
  }

  button {
    background: #7d9561;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #245229;
    }
  }
`;

export const ProductImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
