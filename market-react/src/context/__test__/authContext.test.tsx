import React from "react";
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth, AuthProvider } from "../authContext/authContext";

const mockUser = {
    id: 1,
    username: 'testUser',
    email: 'test@example.com',
  };
  
  const TestComponent = () => {
    const { isAuthenticated, user, login, logout } = useAuth();
  
    return (
      <div>
        <button onClick={() => login(mockUser)}>Log In</button>
        <button onClick={logout}>Log Out</button>
        <p data-testid="auth-status">{isAuthenticated ? 'Logged In' : 'Logged Out'}</p>
        <p data-testid="user-name">{user ? `Welcome, ${user.username}` : 'No user'}</p>
      </div>
    );
  };
  
  describe('AuthProvider', () => {
   beforeAll(() => {
      Object.defineProperty(global, 'localStorage', {
        value: {
          clear: jest.fn(),
          getItem: jest.fn(),
          setItem: jest.fn(),
          removeItem: jest.fn(),
        },
        writable: true,
      });
    });
  
    const renderWithProvider = () =>
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
  
    it('should render with default state (not authenticated)', () => {
      renderWithProvider();
  
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Logged Out');
      expect(screen.getByTestId('user-name')).toHaveTextContent('No user');
    });
  
    it('should authenticate and set the user when login is called', async () => {
      renderWithProvider();
  
      fireEvent.click(screen.getByText('Log In'));
  
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Logged In');
      expect(screen.getByTestId('user-name')).toHaveTextContent(`Welcome, ${mockUser.username}`);
    });
  
    it('should log out and clear user data when logout is called', async () => {
      renderWithProvider();
  
      fireEvent.click(screen.getByText('Log In'));
  
      fireEvent.click(screen.getByText('Log Out'));
  
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Logged Out');
      expect(screen.getByTestId('user-name')).toHaveTextContent('No user');
    });
  
    it('should no call clear localStorage on login', () => {
        const clearMock = jest.spyOn(Storage.prototype, 'clear').mockImplementation(() => {});

        renderWithProvider();
        fireEvent.click(screen.getByText('Log In'));
        expect(clearMock).not.toHaveBeenCalled();
  });
});