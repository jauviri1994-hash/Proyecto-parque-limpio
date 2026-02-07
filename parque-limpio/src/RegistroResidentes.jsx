import React, { useState } from 'react';
import './RegistroResidentes.css';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    torre: '',
    departamento: '',
    mascotas: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Funcionalidad verificada con éxito");
    console.log("Datos del Residente:", formData);
  };

  return (
    <div className="registration-container">
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Usuario: </label>
          <input name="username" type="text" onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Correo Electrónico: </label>
          <input name="email" type="email" onChange={handleChange} required />
        </div>

                <div className="form-group">
          <label>Torre: </label>
          <input name="torre" type="text" onChange={handleChange} placeholder="Ej: Torre A" required />
        </div>

        <div className="form-group">
          <label>Número de Departamento: </label>
          <input name="departamento" type="text" onChange={handleChange} placeholder="Ej: 0101" required />
        </div>

        <div className="form-group">
          <label>Cantidad de Mascotas: </label>
          <input name="mascotas" type="number" min="0" onChange={handleChange} defaultValue="0" />
        </div>
        
        <button type="submit" className="submit-button">Finalizar Registro</button>
      </form>
    </div>
  );
};

export default UserRegistration;