import React from 'react'
import PropTypes from 'prop-types'


const Meet = ({ meet, deleteMeet }) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{meet.pet}</span></p>
            <p>Propietario: <span>{meet.owner}</span></p>
            <p>Fecha: <span>{meet.date}</span></p>
            <p>Hora: <span>{meet.time}</span></p>
            <p>Síntomas: <span>{meet.problems}</span></p>

            <button onClick={() => deleteMeet(meet.id)} className="button eliminar u-full-width">Eliminar &times;</button>
        </div>
    );
}

Meet.propTypes = {
    meet: PropTypes.object.isRequired,
    deleteMeet: PropTypes.func.isRequired
}

export default Meet;
