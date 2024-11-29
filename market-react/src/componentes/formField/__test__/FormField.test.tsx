import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import FormField from '../FormField';

describe('FormField component', () => {
  it('should render label correctly', () => {
    render(
      <FormField
        label="Name"
        name="name"
        type="text"
        value=""
        error=""
        onChange={() => {}}
      />
    );

    const label = screen.getByText('Name:');
    expect(label).toBeInTheDocument(); 
  });

  it('should render an input field when type is text', () => {
    render(
      <FormField
        label="Name"
        name="name"
        type="text"
        value=""
        error=""
        onChange={() => {}}
      />
    );

    const input = screen.getByRole('textbox'); 
    expect(input).toBeInTheDocument(); 
  });

  it('should render a select field when type is select', () => {
    render(
      <FormField
        label="Category"
        name="category"
        type="select"
        value=""
        error=""
        onChange={() => {}}
        options={['Option 1', 'Option 2']}
      />
    );

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2); 
  });

  it('should show an error message if error prop is passed', () => {
    render(
      <FormField
        label="Name"
        name="name"
        type="text"
        value=""
        error="Name is required"
        onChange={() => {}}
      />
    );

    const errorMessage = screen.getByText('Name is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should call onChange when the input changes', () => {
    const handleChange = jest.fn();

    render(
      <FormField
        label="Name"
        name="name"
        type="text"
        value=""
        error=""
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
