import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AddEditUser({ onSubmit, onCancel }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password
    };

    try {
      await onSubmit(null, data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormCancel = () => {
    onCancel();
  };

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="text-center">
          <h3>Agregar/Editar Usuario</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Usuario:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese el nombre de usuario"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese la contraseña"
              required
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
              Guardar
            </Button>
            <Button variant="secondary" onClick={handleFormCancel}>
              Cancelar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddEditUser;
