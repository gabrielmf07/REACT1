
import './campo.css'

const Campo = (props) => {

    const {valor , place , actualizarvalor , obligatorio , tipo  , titulo } = props

    const manejarCambio = (event) => {
        actualizarvalor(event.target.value)
    }

    
    return (
        <div className='campo'>

            <div className='la'>
                <label>{titulo}</label>
            </div>
            

            <input
                placeholder={place}
                required={obligatorio}
                value={valor}
                onChange={manejarCambio}
                type={tipo}
            />
        </div>
    );
}

export default Campo