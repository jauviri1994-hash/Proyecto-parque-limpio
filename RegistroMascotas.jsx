import React, { useState } from 'react';
import './Registro.css';

const RegistroMascota = () => {
  const [mascota, setMascota] = useState({
    nombreMascota: '',
    especie: '',
    raza: '',
    edad: '',
    idDueno: '' 
  });

  const manejarCambio = (e) => {
    setMascota({
      ...mascota,
      [e.target.name]: e.target.value
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Datos de la mascota capturados:", mascota);
    alert("Mascota registrada correctamente en el sistema.");
  };

  return (
    <div className="registration-container">
      <h2>Registro de Mascotas</h2>
      <p style={{textAlign: 'center', color: '#2a6964'}}></p>
      
      <form onSubmit={enviarFormulario}>
        <div className="form-group">
          <label>Nombre de la Mascota:</label>
          <input 
            name="nombreMascota" 
            type="text" 
            value={mascota.nombreMascota} 
            onChange={manejarCambio} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Especie:</label>
          <select 
            name="especie" 
            value={mascota.especie} 
            onChange={manejarCambio} 
            required
            className="select-style"
          >
            <option value="">Seleccione una</option>
            <option value="canino">Canino</option>
            <option value="felino">Felino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Raza:</label>
          <input 
            name="raza" 
            type="text" 
            value={mascota.raza} 
            onChange={manejarCambio} 
          />
        </div>

        <div className="form-group">
          <label>Edad (años):</label>
          <input 
            name="edad" 
            type="number" 
            value={mascota.edad} 
            onChange={manejarCambio} 
          />
        </div>

        <button type="submit" className="submit-button">Guardar Mascota</button>
      </form>
    </div>
  );
};

export default RegistroMascota;