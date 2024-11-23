import React from 'react';

interface SuccessModalProps {
  onAccept: () => void;
}

const Modal: React.FC<SuccessModalProps> = ({ onAccept }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
      <p>Pedido exitoso</p>
      <p>Su pedido se registró con éxito.</p>
      <button onClick={onAccept}>Aceptar</button>
    </div>
  );
};

export default Modal;
