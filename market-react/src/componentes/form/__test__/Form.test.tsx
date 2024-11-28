import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../../../context/cartContext";
import Form from "../Form";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../../hooks/useDistricts", () => ({
  useDistricts: jest.fn(() => ["Lima", "Ancon", "Ate"]),
  useCartContext: jest.fn(() => ({
    dispatch: jest.fn(),
  })),
}));

jest.spyOn(React, "useState");

describe("Form Component", () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <Form />
      </CartProvider>
    );
  });

    it("should render form fields", () => {
        expect(screen.getByLabelText("Nombre:")).toBeInTheDocument();
        expect(screen.getByLabelText("Apellido:")).toBeInTheDocument();
        expect(screen.getByLabelText("Distrito:")).toBeInTheDocument();
        expect(screen.getByLabelText("Dirección:")).toBeInTheDocument();
        expect(screen.getByLabelText("Referencia:")).toBeInTheDocument();
        expect(screen.getByLabelText("Celular:")).toBeInTheDocument();
        expect(
        screen.getByRole("button", { name: /comprar/i })
        ).toBeInTheDocument();
    });

    it("should show error messages when form is submitted with empty fields", async () => {
        fireEvent.click(screen.getByRole("button", { name: /comprar/i }));

        await waitFor(() => {
        expect(screen.getByText("Debe ingresar un valor válido")).toBeInTheDocument();
        expect(screen.getAllByText("Campo obligatorio")).toHaveLength(4);
        expect(screen.getByText("Debe ingresar un número de celular válido")).toBeInTheDocument();
        });
    });

});
describe("Form valid submit and launch modal", () => {
    it("should submit the form correctly with valid data", async () => {
        const mockNavigate = jest.fn();
        jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(mockNavigate);
      
        const setShowSuccessMock = jest.fn();
        React.useState = jest.fn(() => [false, setShowSuccessMock]);
        
        const consoleLogMock = jest.spyOn(console, "log").mockImplementation(() => {});
      
        render(
          <CartProvider>
            <Form />
          </CartProvider>
        );
      
        await userEvent.type(screen.getByLabelText("Nombre:"), "Juan");
        await userEvent.type(screen.getByLabelText("Apellido:"), "Perez");
        await userEvent.selectOptions(screen.getByLabelText("Distrito:"), "Lima");
        await userEvent.type(screen.getByLabelText("Dirección:"), "Av. ejemplo 123");
        await userEvent.type(screen.getByLabelText("Referencia:"), "Cerca del parque");
        await userEvent.type(screen.getByLabelText("Celular:"), "987654321");
      
        fireEvent.click(screen.getByRole("button", { name: /comprar/i }));
      
        expect(consoleLogMock).toHaveBeenCalledWith(
          "Formulario enviado con éxito:",
          {
            nombre: "Juan",
            apellido: "Perez",
            distrito: "Lima",
            direccion: "Av. ejemplo 123",
            referencia: "Cerca del parque",
            celular: "987654321",
          }
        );
      
        consoleLogMock.mockRestore();
      
        fireEvent.click(screen.getByRole("button", { name: /aceptar/i }));
        await waitFor(() => {
        expect((screen.getByLabelText("Nombre:") as HTMLInputElement).value).toBe("");
        expect((screen.getByLabelText("Apellido:") as HTMLInputElement).value).toBe("");
        expect((screen.getByLabelText("Distrito:") as HTMLSelectElement).value).toBe("Seleccionar distrito");
        expect((screen.getByLabelText("Dirección:") as HTMLInputElement).value).toBe("");
        expect((screen.getByLabelText("Referencia:") as HTMLInputElement).value).toBe("");
        expect((screen.getByLabelText("Celular:") as HTMLInputElement).value).toBe("");
      
        expect(mockNavigate).toHaveBeenCalledWith('/'); 
    });
});
});