import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const ModalText = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  color: #333;
  text-align: center;
`;

export const ModalButton = styled.button`
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff0081;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 0, 130, 0.4);

  &:hover {
    background-color: #e00072;
    box-shadow: 0 4px 12px rgba(255, 0, 130, 0.6);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #c00063;
    box-shadow: 0 2px 6px rgba(255, 0, 130, 0.4);
    transform: translateY(0);
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
