import React from "react";
import "@testing-library/jest-dom";

import { fireEvent, waitFor } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { AuthProvider } from "../../../context/authContext/authContext";
import { loginService } from "../../../services/auth.service";
import FormLogin from "../FormLogin";
import { MemoryRouter } from "react-router-dom";

jest.mock('../../../services/auth.service', () => ({
    loginService: jest.fn(),
  }));
  describe('FormLogin', () => {
    const mockLogin = jest.fn();
    const mockNavigate = jest.fn();
  
    beforeEach(() => { 
        jest.spyOn(require('../../../context/authContext/authContext.tsx'), 'useAuth').mockReturnValue({
        login: mockLogin,
        isAuthenticated: false,
        user: null,
        logout: jest.fn(),
      });
      render(
        <MemoryRouter>
        <AuthProvider>
          <FormLogin />
        </AuthProvider>
      </MemoryRouter>
      );
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it('should render the login form', () => {
     
      expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
      expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
      expect(screen.getByText('Seguir comprando')).toBeInTheDocument();
    });
  
    it('should show an error if the username is empty', async () => {
  
      const submitButton = screen.getByText('Iniciar Sesión');
      fireEvent.click(submitButton);
  
      expect(screen.getByText('El nombre de usuario es obligatorio.')).toBeInTheDocument();
     
    });
    it('should show an error if the password is empty', async () => {
        jest.mocked(loginService).mockResolvedValue({
            id: 1,
            username: 'testuser',
            email: 'test@example.com',
            accessToken: 'test-access-token',
            refreshToken: 'test-refresh-token',
            firstName: 'string',
            lastName: 'string',
            gender: 'string',
            image: 'string'
          });
      
          fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'testuser' } });
        const submitButton = screen.getByText('Iniciar Sesión');
        fireEvent.click(submitButton);
    
        expect(screen.getByText('La contraseña es obligatoria.')).toBeInTheDocument();
       
      });
   
    it('should call loginService when the form is valid', async () => {
      jest.mocked(loginService).mockResolvedValue({
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        accessToken: 'test-access-token',
        refreshToken: 'test-refresh-token',
        firstName: 'string',
        lastName: 'string',
        gender: 'string',
        image: 'string'
      });
  
      fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
      fireEvent.click(screen.getByText('Iniciar Sesión'));
  
      await waitFor(() => {
        expect(jest.mocked(loginService)).toHaveBeenCalledTimes(1);
        expect(mockLogin).toHaveBeenCalledWith({
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
        });
      });
    });
  
    it('should display error message if login fails', async () => {
        jest.mocked(loginService).mockRejectedValue(new Error('Login failed'));
      
        fireEvent.change(screen.getByPlaceholderText('Usuario'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
      
        fireEvent.click(screen.getByText('Iniciar Sesión'));
      
        await waitFor(() => {
          expect(screen.getByText('Login failed')).toBeInTheDocument();
        });
      });
  
    it('should close the forgot password modal', async () => {
  
      const forgotPasswordLink = screen.getByText('Olvidé mi contraseña');
      fireEvent.click(forgotPasswordLink);
      expect(screen.getByText('Restablecer Contraseña')).toBeInTheDocument();
  
      const closeButton = screen.getByText('Cancelar');
      fireEvent.click(closeButton);
      expect(screen.queryByText('Restablecer Contraseña')).not.toBeInTheDocument();
    });

    it('should open the forgot password modal and validate email input inside modal', async () => {
  
        const forgotPasswordLink = screen.getByText('Olvidé mi contraseña');
        fireEvent.click(forgotPasswordLink);
        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        await fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    
        fireEvent.click(screen.getByText('Enviar'));
        await waitFor(() => {
            const errorMessages = screen.getAllByText('Por favor, ingrese un correo válido.');
            expect(errorMessages.length).toBeGreaterThan(0); 
          });
      });

      it('should not show an error if the email is valid', async () => {
        fireEvent.click(screen.getByText('Olvidé mi contraseña'));
    
        await waitFor(() => {
          expect(screen.getByText('Restablecer Contraseña')).toBeInTheDocument();
        });
    
        fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'test@example.com' } });
        fireEvent.click(screen.getByText('Enviar'));
        await waitFor(() => {
          expect(screen.queryByText('Por favor, ingrese un correo válido.')).not.toBeInTheDocument();
        });
      });

  });

 