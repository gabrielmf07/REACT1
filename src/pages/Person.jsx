import Admin from "../layout/PageAdmin"
import Campo from "../components/CampoFormulario/Campo"
import "./person.css"

import * as Data from "../Data"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify';

function Person() {

    const [name, setName] = useState("")
    const [lname, setLname] = useState("")
    const [dni, setDni] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [cumple, setCumple] = useState("")
    const [address, setAddress] = useState("")
    const [certificado, setCertificado] = useState("")
    const [maquina, setMaquina] = useState("")

    const [person, setPerson] = useState([])
    const [dataperson, setDataperson] = useState([])

    

    useEffect(() => {
        
        const obtenerPerson = async () => {
            try {
                const x = await Data.viewPerson(setPerson)
                console.log(x)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerPerson()
    }, [])

    const [valorboton, setValorboton] = useState("Registrar")



    const registrar = async (event) => {
        event.preventDefault()
        try {
            if (valorboton === "Registrar") {
                await Data.personRegister(name, lname, dni, number, email, cumple, address, certificado, maquina)
                await Data.viewPerson(setPerson)
            }
            else {
                await Data.personUpdate(dataperson.id, name, lname, dni, number, email, cumple, address, certificado, maquina)
                await Data.viewPerson(setPerson)

            }


        } catch (error) {
            console.log(error)

        }

    }

    const eliminar = async (id) => {
        try {
            await Data.personDelete(id)
            await Data.viewPerson(setPerson)

        } catch (error) {
            console.log(error)
        }
    }

    const mostardatos = (obj) => {
        setName(obj.name)
        setLname(obj.last_name)
        setDni(obj.dni)
        setNumber(obj.number)
        setEmail(obj.email)
        setCumple(obj.date_birth)
        setAddress(obj.address)
        setCertificado(obj.certifications)
        setMaquina(obj.machinery)
    }





    return (
        <Admin>
            <h1 >Persons</h1>
            <div className="person">
                <button onClick={() => { setValorboton("Registrar") }}>Modo registros</button>
                <form onSubmit={registrar}>
                    <ToastContainer />
                    <div className="p-campos">
                        <Campo
                            titulo={"Nombres"}
                            valor={name}
                            place={'ingrese el nombre'}
                            actualizarvalor={setName}
                            obligatorio
                            tipo={'text'}
                        />
                        <Campo
                            titulo={"Last name"}
                            valor={lname}
                            place={'ingrese el last name'}
                            actualizarvalor={setLname}
                            obligatorio
                            tipo={'text'}
                        />

                        <Campo
                            titulo={"DNI"}
                            valor={dni}
                            place={'ingrese el dni'}
                            actualizarvalor={setDni}
                            obligatorio
                            tipo={'text'}
                        />
                        <Campo
                            titulo={"Phone"}
                            valor={number}
                            place={'ingrese el telefono'}
                            actualizarvalor={setNumber}
                            obligatorio
                            tipo={'text'}
                        />

                        <Campo
                            titulo={"Email"}
                            valor={email}
                            place={'ingrese el correo'}
                            actualizarvalor={setEmail}
                            obligatorio
                            tipo={'text'}
                        />
                        <Campo
                            titulo={"Cumpleaños"}
                            valor={cumple}
                            place={'ingrese fecha de ...'}
                            actualizarvalor={setCumple}
                            obligatorio
                            tipo={'date'}
                        />
                        <Campo
                            titulo={"Address"}
                            valor={address}
                            place={'ingrese la ciudad'}
                            actualizarvalor={setAddress}
                            obligatorio
                            tipo={'text'}
                        />
                        <Campo
                            titulo={"Certificado"}
                            valor={certificado}
                            place={'ingrese el tipo de certificacion'}
                            actualizarvalor={setCertificado}
                            obligatorio
                            tipo={'text'}
                        />
                        <Campo
                            titulo={"Maquinaria"}
                            valor={maquina}
                            place={'ingrese la maquinaria'}
                            actualizarvalor={setMaquina}
                            obligatorio
                            tipo={'text'}
                        />
                    </div>


                    <button>{valorboton}</button>
                </form>

                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Certificaciones</th>
                            <th>Maquinaria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {person.map((person) => (
                            <tr key={person.id}>
                                <td>{person.last_name}</td>
                                <td>{person.email}</td>
                                <td>{person.address}</td>
                                <td>{person.certifications}</td>
                                <td>{person.machinery}</td>
                                <td>
                                <div className="acciones">
                                        <div className="btn-del">
                                            <button onClick={() => { eliminar(person.id) }}>Eliminar</button>
                                        </div>
                                        <div className="btn-edit">
                                            <button onClick={() => { mostardatos(person); setValorboton("Actualizar"); setDataperson(person) }}>Editar</button>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                



            </div>
            
        </Admin>
    )
}

export default Person