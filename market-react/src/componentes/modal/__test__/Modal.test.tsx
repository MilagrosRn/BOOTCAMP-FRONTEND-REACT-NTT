import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Modal'; 
import React from 'react';

describe('Modal Component', () => {
  it('renders the modal with the correct text', () => {
    render(<Modal onAccept={jest.fn()} />);

    expect(screen.getByText('Pedido exitoso')).toBeInTheDocument();
    expect(
      screen.getByText('Su pedido se registró con éxito.')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Aceptar/i })).toBeInTheDocument();
  });

  it('calls onAccept when the accept button is clicked', () => {
    const onAcceptMock = jest.fn();

    render(<Modal onAccept={onAcceptMock} />);

    const acceptButton = screen.getByRole('button', { name: /Aceptar/i });
    fireEvent.click(acceptButton);

    expect(onAcceptMock).toHaveBeenCalledTimes(1);
  });
});
