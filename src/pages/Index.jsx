<<<<<<< HEAD
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Index() {
  return (
    <div className="index">
      <header>
        <nav>
          {/* Menú de navegación */}
        </nav>
      </header>

      <section className="hero">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Dispositivo de Alarma en Casco de Seguridad</h1>
              <p>
                Mejora la seguridad de tus trabajadores en entornos mineros
                con nuestro dispositivo de alarma de última generación.
              </p>
              <Button variant="primary" size="lg">Solicitar Demostración</Button>
            </Col>
            <Col md={6}>
              {/* <img src={deviceImage} alt="Dispositivo de Alarma" /> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features">
        <Container>
          <Row>
            <Col md={4}>
              <div className="feature">
                <h3>Alertas en Tiempo Real</h3>
                <p>
                  Recibe notificaciones instantáneas en caso de situaciones de
                  emergencia o riesgo.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature">
                <h3>Detección de Caídas</h3>
                <p>
                  Detecta automáticamente las caídas y envía alertas a los
                  equipos de rescate.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature">
                <h3>Localización GPS</h3>
                <p>
                  Localiza a tus trabajadores en tiempo real y asegura una
                  respuesta rápida en caso de emergencia.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Contáctanos</h2>
              <p>
                Si estás interesado en obtener más información sobre nuestro
                dispositivo de alarma en casco de seguridad, contáctanos
                mediante el siguiente formulario o llámanos al: 123-456-7890.
              </p>
              <form>
                {/* Formulario de contacto */}
              </form>
            </Col>
            <Col md={6}>
              {/* <img src={mapImage} alt="Ubicación de la empresa" /> */}
            </Col>
          </Row>
        </Container>
      </section>

      <footer>
        <Container>
          <p>Todos los derechos reservados &copy; 2023 Empresa Minera</p>
        </Container>
      </footer>
    </div>
  );
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/login.css'
import { faUser, faUnlockAlt  } from '@fortawesome/free-solid-svg-icons'
function Index() {
    return (
        <div className='container_login'>
            <div className="login_form_container">
            <div className="login_form">
                <h2>Acceder</h2>
                <div className="input_group">
                    <FontAwesomeIcon icon={faUser}/>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input_text"
                        autocomplete="off"
                    />
                </div>
                <div className="input_group">
                    <FontAwesomeIcon icon={faUnlockAlt}/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input_text"
                        autocomplete="off"
                    />
                </div>
                <div className="button_group" id="login_button">
                    <a>Ingresar</a>
                </div>
                <div className="fotter">
                    <a>Solicitar credenciales al administrador</a>
                </div>
            </div>
        </div>
        </div>
    )
>>>>>>> 25779f6f47eff8abc5dbdf5b6b29b5fedf427809
}

export default Index;
