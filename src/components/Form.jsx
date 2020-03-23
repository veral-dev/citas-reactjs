import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'


const Form = ({ createMeet }) => {

  //Crear state de Citas
  const [meet, setMeet] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    problems: '',
  });

  const [error, setError] = useState(false)

  const handleChange = e => {

    setMeet({
      ...meet,
      [e.target.name]: e.target.value
    })

  }

  //extraer los valores
  const { pet, owner, date, time, problems } = meet

  //Cuando se envía formulario
  const submitMeet = e => {
    e.preventDefault()

    //validar
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || problems.trim() === '') {
      setError(true)
      return
    }
    // Eliminar el mensaje de error
    setError(false)

    // Asignar un ID
    meet.id = uuidv4()
    //Crear una cita
    createMeet(meet)

    //Reiniciar el form
    setMeet({
      pet: '',
      owner: '',
      date: '',
      time: '',
      problems: '',
    })
  }

  return (
    <>
      <h2>Crear cita</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form onSubmit={submitMeet}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          value={pet}
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name="owner"
          value={owner}
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={handleChange}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          value={date}
          className="u-full-width"
          onChange={handleChange} />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          value={time}
          className="u-full-width"
          onChange={handleChange} />
        <label>Síntomas</label>
        <textarea name="problems" className="u-full-width" value={problems} onChange={handleChange}></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  createMeet: PropTypes.func.isRequired
}

export default Form;
