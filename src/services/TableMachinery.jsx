import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon de Font Awesome
import { faEdit, faAdd, faUser, faPhone, faEnvelope, faIdCard, faUserShield, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos de Font Awesome
import { useEffect, useState } from 'react'; // Importa los hooks useEffect y useState de React
import axios from 'axios'; // Importa la biblioteca Axios

function TableMachinery({ machineries, componentNew }) {
    const apiMachinery = "https://proalarmepp.onrender.com/api/"; // URL de la API de maquinarias

    const [selectedMachinery, setSelectedMachinery] = useState(0); // Estado para almacenar la maquinaria seleccionada
    const [machinery, setMachinery] = useState({}); // Estado para almacenar los datos de la maquinaria
    const [person, setPerson] = useState({}); // Estado para almacenar los datos de la persona encargada
    const [user, setUser] = useState({}); // Estado para almacenar los datos del usuario
    const [personSelected, setPersonSelected] = useState(false); // Estado para indicar si se ha seleccionado una persona
    const [userSelected, setUserSelected] = useState(false); // Estado para indicar si se ha seleccionado un usuario

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [machineryResponse, personResponse] = await Promise.all([
                    axios.get(`${apiMachinery}machinery/${selectedMachinery}/`), // Obtiene los datos de la maquinaria seleccionada
                    axios.get(`${apiMachinery}person/?machinery=${selectedMachinery}`) // Obtiene los datos de la persona asociada a la maquinaria
                ]);

                setMachinery(machineryResponse.data); // Actualiza el estado con los datos de la maquinaria
                if (personResponse.data[0]) {
                    setPerson(personResponse.data[0]); // Actualiza el estado con los datos de la persona
                    setPersonSelected(true); // Indica que se ha seleccionado una persona
                } else {
                    setPersonSelected(false); // Indica que no se ha seleccionado una persona
                    setUserSelected(false); // Indica que no se ha seleccionado un usuario
                }
            } catch (e) {
                console.error(e); // Muestra cualquier error en la consola
            }
        };

        if (selectedMachinery !== 0) {
            fetchData(); // Ejecuta la función fetchData si se ha seleccionado una maquinaria
        }
    }, [selectedMachinery]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiMachinery}user/?person=${person.id}`);
                if (response.data[0]) {
                    setUser(response.data[0]);
                    setUserSelected(true);
                } else {
                    setUserSelected(false);
                }
            } catch (e) {
                console.error(e);
            }
        };

        if (selectedMachinery !== 0 && person.id) {
            fetchData();
        }
    }, [person]);

    const handleMachineryClick = (id) => {
        setSelectedMachinery(id);
    };

    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Maquinarias</h2>
                    <div>
                        <button className="btn" onClick={() => componentNew(true)}>
                            <FontAwesomeIcon icon={faAdd} id="btn_open" /> Agregar
                        </button>
                    </div>
                </div>

                <table border={2}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tipo-Maquinaria</th>
                            <th>Mantinimiento</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {machineries.map((machinery, index) => (
                            <tr key={machinery.id} onClick={() => handleMachineryClick(machinery.id)}>
                                <th>{index + 1}</th>
                                <td>{machinery.type_machinery}</td>
                                <td>{machinery.date_maintenance}</td>
                                <td>{machinery.status}</td>
                                <td>
                                    <FontAwesomeIcon icon={faEdit} id="btn_open" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="recentCustomers">
                {selectedMachinery === 0 ? (
                    <div className='container_div'>
                        <div className='centered-div alert_p'>
                            <p className=''>Seleccione una maquinaria para obtener informacion</p>
                        </div>
                    </div>
                ) : (
                    <div className="cardHeader">
                        <img src={machinery.img} alt="" className="card__img" />
                    </div>
                )}

                <div className='container_center'>
                    {personSelected && (
                        <div className="card_user">
                            <div className="card__title">
                                <h2>{machinery.type_machinery}</h2>
                            </div>
                            <div className='container_center'>
                                <div className="card__content">
                                    <h3>
                                        PERSONA ENCARGADO
                                    </h3>
                                </div>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faUser} /> {person.name}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faIdCard} /> {person.dni}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faPhone} /> {person.number}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faEnvelope} /> {person.email}
                                </h4>
                            </div>
                        </div>
                    )}
                </div>

                <div className='container_center'>
                    {userSelected && (
                        <div className="card_user">
                            <div className="container_center">
                                <div className="card_avatar">
                                    <img src={user.avatar !== "" ? user.avatar : "https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?pid=ImgDet&rs=1"} alt="" className="card__img_avatar" />
                                </div>
                            </div>
                            <div className='container_center'>
                                <div className="card__content">
                                    <h2>
                                        {user.rol === 1 ? "ADMINISTRADOR" : "USUARIO"}
                                    </h2>
                                </div>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faUser} /> {user.username}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faUserShield} /> {user.rol === 1 ? "Administrador" : "Operador"}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faCalendarAlt} /> {user.date_created}
                                </h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TableMachinery;
