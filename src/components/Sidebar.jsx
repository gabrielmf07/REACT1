import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFile, faVideo, faStickyNote, faIdBadge, faAddressCard, faTools, faTruck, faUser, faUsers, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/estilos.css';

function Sidebar() {
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        // Obtén el pathname actual de la URL
        const currentPathname = window.location.pathname;

        // Verifica y establece la opción seleccionada en función del pathname actual
        if (currentPathname === "/admin") {
            setSelectedOption("Inicio");
        } else if (currentPathname === "/admin/machinery") {
            setSelectedOption("Maquinarias");
        } else if (currentPathname === "/admin/person") {
            setSelectedOption("Personas");
        } else if (currentPathname === "/admin/user") {
            setSelectedOption("Usuarios");
        } else if (currentPathname === "/admin/alert") {
            setSelectedOption("Alertas");
        }
    }, []);

    return (
        <div className="menu__side" id="menu_side">
            <div className="name__page">
                <FontAwesomeIcon className='icon' icon={faTools} />
                <h4>ProAlarmEpp</h4>
            </div>

            <div className="options__menu">
                <NavLink
                    to="/admin"
                    className={selectedOption === "Inicio" ? "nav_link selected" : "nav_link"}
                    onClick={() => setSelectedOption("Inicio")}
                >
                    <div className="option">
                        <FontAwesomeIcon className='icon' icon={faHome} title="Inicio" />
                        <h4>Inicio</h4>
                    </div>
                </NavLink>

                <NavLink
                    to="/admin/machinery"
                    className={selectedOption === "Maquinarias" ? "nav_link selected" : "nav_link"}
                    onClick={() => setSelectedOption("Maquinarias")}
                >
                    <div className="option">
                        <FontAwesomeIcon className='icon' icon={faTruck} title="Maquinarias" />
                        <h4>Maquinarias</h4>
                    </div>
                </NavLink>

                <NavLink
                    to="/admin/person"
                    className={selectedOption === "Personas" ? "nav_link selected" : "nav_link"}
                    onClick={() => setSelectedOption("Personas")}
                >
                    <div className="option">
                        <FontAwesomeIcon className='icon' icon={faUser} title="Personas" />
                        <h4>Personas</h4>
                    </div>
                </NavLink>

                <NavLink
                    to="/admin/user"
                    className={selectedOption === "Usuarios" ? "nav_link selected" : "nav_link"}
                    onClick={() => setSelectedOption("Usuarios")}
                >
                    <div className="option">
                        <FontAwesomeIcon className='icon' icon={faUsers} title="Usuarios" />
                        <h4>Usuarios</h4>
                    </div>
                </NavLink>

                <NavLink
                    to="/admin/alert"
                    className={selectedOption === "Alertas" ? "nav_link selected" : "nav_link"}
                    onClick={() => setSelectedOption("Alertas")}
                >
                    <div className="option">
                        <FontAwesomeIcon className='icon' icon={faExclamationTriangle} title="Alertas" />
                        <h4>Alertas</h4>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
