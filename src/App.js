import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Meet from "./components/Meet";


function App() {

  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('meets'))
  if (!citasIniciales) {
    console.log('HOla')
    citasIniciales = []
  }

  //Array con citas
  const [meets, addMeets] = useState(citasIniciales)

  // //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('meets'))

    if (citasIniciales) {
      localStorage.setItem('meets', JSON.stringify(meets))
    } else {
      localStorage.setItem('meets', JSON.stringify([]))
    }
  }, [meets])

  // Función que coja las citas actuales y agregue la nueva
  const createMeet = meet => {
    addMeets([...meets, meet])
  }

  // Eliminar cita
  const deleteMeet = id => {
    const newMeets = meets.filter(meet => meet.id !== id)
    addMeets(newMeets)
  }

  //Mensaje condicional
  const title = meets.length === 0 ? 'No hay citas' : 'Administra tus citas'



  return (
    <>
      <h1>Administrar pacientes</h1>
      <div className="container">
        <div className="Row">
          <div className="one-half column">
            <Form createMeet={createMeet} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>

            {meets.map(meet => (
              <Meet
                key={meet.id}
                meet={meet}
                deleteMeet={deleteMeet}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
