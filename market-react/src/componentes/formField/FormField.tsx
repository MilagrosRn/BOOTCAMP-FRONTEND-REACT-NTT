import React from 'react';

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
    <div>
      <label>{label}:</label>
      {type === 'select' ? (
        <select name={name} value={value} onChange={onChange}>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FormField;
