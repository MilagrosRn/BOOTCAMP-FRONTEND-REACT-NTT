import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDistricts from '../../hooks/useDistricts';
import Modal from '../modal/Modal';
import FormField from '../formField/FormField';

const FormComponent: React.FC = () => {
  const navigate = useNavigate();
  const distritos = useDistricts();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    distrito: '',
    direccion: '',
    referencia: '',
    celular: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    distrito: '',
    direccion: '',
    referencia: '',
    celular: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;
    let newErrors = { ...errors };

    if (!formData.nombre || /\d/.test(formData.nombre)) {
      newErrors.nombre = 'Debe ingresar un valor válido';
      formIsValid = false;
    }
    if (!formData.apellido) {
      newErrors.apellido = 'Campo obligatorio';
      formIsValid = false;
    }
    if (!formData.distrito || formData.distrito === 'Seleccionar distrito') {
      newErrors.distrito = 'Campo obligatorio';
      formIsValid = false;
    }
    if (!formData.direccion) {
      newErrors.direccion = 'Campo obligatorio';
      formIsValid = false;
    }
    if (!formData.referencia) {
      newErrors.referencia = 'Campo obligatorio';
      formIsValid = false;
    }
    if (!formData.celular || !/^\d{9}$/.test(formData.celular)) {
      newErrors.celular = 'Debe ingresar un número de celular válido';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log('Formulario enviado con éxito:', formData);
      setShowSuccess(true);
    }
  };

  const handleAccept = () => {
    setShowSuccess(false);
    setFormData({
      nombre: '',
      apellido: '',
      distrito: '',
      direccion: '',
      referencia: '',
      celular: '',
    });
    navigate('/');
  };

  return (
    <div>
      <h1>Resumen de Carrito</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          error={errors.nombre}
          onChange={handleChange}
        />
        <FormField
          label="Apellido"
          name="apellido"
          type="text"
          value={formData.apellido}
          error={errors.apellido}
          onChange={handleChange}
        />
        <FormField
          label="Distrito"
          name="distrito"
          type="select"
          value={formData.distrito}
          error={errors.distrito}
          onChange={handleChange}
          options={['Seleccionar distrito', ...distritos]}
        />
        <FormField
          label="Dirección"
          name="direccion"
          type="text"
          value={formData.direccion}
          error={errors.direccion}
          onChange={handleChange}
        />
        <FormField
          label="Referencia"
          name="referencia"
          type="text"
          value={formData.referencia}
          error={errors.referencia}
          onChange={handleChange}
        />
        <FormField
          label="Celular"
          name="celular"
          type="text"
          value={formData.celular}
          error={errors.celular}
          onChange={handleChange}
        />
        <button type="submit">Comprar</button>
      </form>

      {showSuccess && <Modal onAccept={handleAccept} />}
    </div>
  );
};

export default FormComponent;
