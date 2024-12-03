import { LoginCredentials } from "../domain/loginCredential";
import { LoginResponse } from "../domain/loginResponse";

export const loginService = async (
    credentials: LoginCredentials
  ): Promise<LoginResponse> => {
    const response = await fetch("/api/auth/login", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include",
    });
  
    if (!response.ok) {
      throw new Error("Credenciales incorrectas. Por favor, intenta nuevamente.");
    }
  
    return response.json();
  };
  