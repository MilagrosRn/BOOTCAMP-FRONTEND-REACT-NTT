import React from 'react';
import { ModalBackdrop, ModalButton, ModalContainer, ModalText } from './Modal.styled';

interface SuccessModalProps {
  onAccept: () => void;
}

const Modal: React.FC<SuccessModalProps> = ({ onAccept }) => {
  return (
 
    <>
    <ModalBackdrop />
    <ModalContainer>
      <ModalText>Pedido exitoso</ModalText>
      <ModalText>Su pedido se registró con éxito.</ModalText>
      <ModalButton onClick={onAccept}>Aceptar</ModalButton>
    </ModalContainer>
  </>
  );
};

export default Modal;
