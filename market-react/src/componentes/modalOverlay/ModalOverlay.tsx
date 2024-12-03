import { Overlay, Content } from "./Modal.Overlay.styled";
import React from "react";


interface ModalOverlayProps {
    children: React.ReactNode;
    onClose: () => void;
  }
  
  const ModalOverlay: React.FC<ModalOverlayProps> = ({ children, onClose }) => {
    return (
      <Overlay  role="dialog" onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
      </Overlay>
    );
  };
  
  export default ModalOverlay;