import { Overlay, Content } from "./Modal.Overlay.styled";

interface ModalOverlayProps {
    children: React.ReactNode;
    onClose: () => void;
  }
  
  const ModalOverlay: React.FC<ModalOverlayProps> = ({ children, onClose }) => {
    return (
      <Overlay onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
      </Overlay>
    );
  };
  
  export default ModalOverlay;