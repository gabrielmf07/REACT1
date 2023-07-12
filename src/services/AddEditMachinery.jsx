import { useEffect, useState } from "react" // Importa los hooks useEffect y useState de React
import {
    Col, Form, Button, Row, Badge,
    Card,
    Navbar,
    Nav,
    Container,
    Image,
    InputGroup
<<<<<<< HEAD
} from "react-bootstrap" // Importa varios componentes de React Bootstrap
=======
} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

>>>>>>> 25779f6f47eff8abc5dbdf5b6b29b5fedf427809

function FormMachinery({ machinery, onSubmit, onCancel }) {

    const [typeMachinery, setTypeMachinery] = useState('') // Estado para el tipo de maquinaria
    const [model, setModel] = useState('') // Estado para el modelo
    const [numSerial, setNumSerial] = useState(0) // Estado para el número de serie
    const [year, setYear] = useState(0) // Estado para el año
    const [capacity, setCapacity] = useState(0) // Estado para la capacidad
    const [typeFuel, setTypeFuel] = useState('') // Estado para el tipo de combustible
    const [hour, setHour] = useState(0) // Estado para la hora
    const [dateMaintenance, setDateMaintenance] = useState('') // Estado para la fecha de mantenimiento
    const [status, setStatus] = useState('') // Estado para el estado
    const [typeEngine, setTypeEngine] = useState('') // Estado para el tipo de motor
    const [img, setImg] = useState('') // Estado para la URL de la imagen

    useEffect(() => {
        if (machinery) {
            setTypeMachinery(machinery.type_machinery) // Actualiza el estado con el tipo de maquinaria
            setModel(machinery.model) // Actualiza el estado con el modelo
            setNumSerial(machinery.num_serial) // Actualiza el estado con el número de serie
            setYear(machinery.year) // Actualiza el estado con el año
            setCapacity(machinery.capacity) // Actualiza el estado con la capacidad
            setTypeFuel(machinery.type_fuel) // Actualiza el estado con el tipo de combustible
            setHour(machinery.hour) // Actualiza el estado con la hora
            setDateMaintenance(machinery.date_maintenance) // Actualiza el estado con la fecha de mantenimiento
            setStatus(machinery.status) // Actualiza el estado con el estado
            setTypeEngine(machinery.type_engine) // Actualiza el estado con el tipo de motor
            setImg(machinery.img) // Actualiza el estado con la URL de la imagen
        }
    }, [machinery]) // Se ejecuta cuando el valor de "machinery" cambia

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            type_machinery: typeMachinery,
            model: model,
            num_serial: numSerial,
            year: year,
            capacity: capacity,
            type_fuel: typeFuel,
            hour: hour,
            date_maintenance: dateMaintenance,
            status: status,
            type_engine: typeEngine,
            img: img
        }
        onSubmit(machinery ? machinery.id : null, data)
    }

    const handleFormCancel = () => {
        onCancel()
    }


    return (
        <div className="details">
            <div className="recentOrders">
                <div className="text-center">
                    <h3>{machinery ? "Actualizar Maquinaria" : "Agregar Maquinaria"}</h3>
                </div>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formTypeMachinery" className="mb-3">
                                    <Form.Label>Tipo - Maquinaria:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="type_machinery"
                                        value={typeMachinery}
                                        onChange={(e) => setTypeMachinery(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                {/* Resto de los campos del formulario */}
                            </Col>
                            <Form.Group controlId="formImg" className="mb-3">
                                <Form.Label>URL - Imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="img"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                    placeholder=""
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                                    {machinery ? "Actualizar" : "Agregar"}
                                </Button>
                                <Button variant="secondary" onClick={handleFormCancel}>
                                    Cancelar
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </div>
            <div className="recentCustomers">
                {machinery || img ?
                    (
                        <div className="cardHeader">
                            <img src={img} alt="" className="card__img" />
                        </div>
                    )
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default FormMachinery
