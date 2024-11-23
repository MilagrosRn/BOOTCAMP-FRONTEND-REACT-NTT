import styled from "styled-components";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: flex-start;
  box-shadow: 10px 6px 37px -13px rgba(51, 51, 51, 0.74);
  border-radius: 2px;
  padding: 10px;
  text-align: center;
  background-color: #f4fae0;
  h1{
    font-size: 1.5rem }
`;
export const TittleCointainer=styled.div`
display: flex;
align-items: center;
`
export const CartContainer = styled.div`
  margin-bottom: 20px;
  box-shadow: 10px 6px 37px -13px rgba(51, 51, 51, 0.74);
  border-radius: 2px;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 5px;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      display: block;
      width: 100%;
      text-align: center;
      padding: 8px;
    }

    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }

    img {
      width: 60%;
      margin: 0 auto;
    }
  }
`;

export const TotalContainer = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 5px;
    margin: 0 5px;
    background-color: #ff0081;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8rem;

    &:hover {
      background-color: #e00072;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 3px;
      font-size: 0.7rem;
    }

    span {
      margin: 0 3px;
    }
  }
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #d42e2f;
  }

  @media (max-width: 480px) {
    padding: 3px 8px;
    font-size: 0.8rem;
  }
`;
