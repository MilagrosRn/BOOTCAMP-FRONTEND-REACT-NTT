import { render, screen, fireEvent } from "@testing-library/react";
import ModalOverlay from "../ModalOverlay";
import React from "react";
import "@testing-library/jest-dom";

describe("ModalOverlay", () => {
  it("should render modal content", () => {
    const onClose = jest.fn();

    render(
      <ModalOverlay onClose={onClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should call onClose when clicking outside the modal content", () => {
    const onClose = jest.fn();

    render(
      <ModalOverlay onClose={onClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );

    fireEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose when clicking inside the modal content", () => {
    const onClose = jest.fn();

    render(
      <ModalOverlay onClose={onClose}>
        <div>Test Content</div>
      </ModalOverlay>
    );

    fireEvent.click(screen.getByText("Test Content"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
