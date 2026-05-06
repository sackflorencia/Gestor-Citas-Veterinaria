import { useState } from 'react';
import './Formulario.css'
import Modal from '../Modal';

const Formulario = ({ agregarCita }) => {
    const [error, setError] = useState(false);
    const ingresar = (event) => {
        event.preventDefault();
        const formulario = event.target;

        const nuevaCita = {
            mascota: formulario.mascota.value,
            propietario: formulario.propietario.value,
            fecha: formulario.fecha.value,
            hora: formulario.hora.value,
            sintomas: formulario.sintomas.value
        };

        if (
            !nuevaCita.mascota ||
            !nuevaCita.propietario ||
            !nuevaCita.fecha ||
            !nuevaCita.hora ||
            !nuevaCita.sintomas
        ) {
            setError(true);
            return;
        }

        setError(false);
        agregarCita(nuevaCita);
    };
    return (
        <>
            <form onSubmit={(e) => ingresar(e)}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" />
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
            <Modal
                visible={error}
                message="Rellená todos los campos por favor"
                actions={[
                    {
                        label: "Cerrar",
                        onClick: () => setError(false)
                    }
                ]}
            />
        </>
    );
}

export default Formulario;