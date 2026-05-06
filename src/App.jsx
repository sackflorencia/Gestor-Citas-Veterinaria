import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Titulo from './components/Titulo'
import Modal from './components/Modal';

function App() {
  const citasGuardadas = localStorage.getItem('citas') ? 
     JSON.parse(localStorage.getItem('citas')) : [] 
  const [listaCitas, setListaCitas] = useState(citasGuardadas);
  const [citaAEliminar, setCitaAEliminar] = useState(null);
  const agregarCita = (cita) => {
    setListaCitas([...listaCitas, cita])
  };
  useEffect(()=>{
    localStorage.setItem('citas', JSON.stringify(listaCitas)), [listaCitas]
  });
  const pedirEliminar = (cita) => {
    setCitaAEliminar(cita);
  };

  const confirmarEliminar = () => {
    setListaCitas(listaCitas.filter(c => c !== citaAEliminar));
    setCitaAEliminar(null);
  };

  const cancelarEliminar = () => {
    setCitaAEliminar(null);
  };
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" tipo="h1" />

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Titulo texto="Crear mi Cita" />
            <Formulario agregarCita={agregarCita} />
          </div>

          <div className="one-half column">
            <Titulo texto="Administra tus citas" />
            <Listado listaCitas={listaCitas} pedirEliminar={pedirEliminar} />
          </div>

        </div>
        <Modal
          visible={citaAEliminar !== null}
          message="Estas seguro que querés eliminar la cita?"
          actions={[
            {
              label: "Sí, eliminar",
              onClick: confirmarEliminar
            },
            {
              label: "Cancelar",
              onClick: cancelarEliminar
            }
          ]}
        />
      </div>
    </>
  )
}

export default App