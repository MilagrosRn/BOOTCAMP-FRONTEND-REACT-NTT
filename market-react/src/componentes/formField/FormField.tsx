import React from 'react';
import { FormContainer, FormInput, FormSelect } from './FormField.styled';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  error,
  onChange,
  options,
}) => {
  return (
    <FormContainer>
      <label  htmlFor={name}>{label}:</label>
      {type === 'select' ? (
        <FormSelect id={name} name={name} value={value} onChange={onChange}>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>
      ) : (
        <FormInput id={name} type={type} name={name} value={value} onChange={onChange} />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </FormContainer>
  );
};

export default FormField;
