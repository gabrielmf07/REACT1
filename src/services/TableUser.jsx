import Admin from "../layout/PageAdmin";
import '../assets/css/styles.css';
import TableUser from "../services/TableUser";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEditUser from "../services/AddEditUser";

function User() {
  const apiUser = "https://example-api.com/api/user/";

  const [users, setUsers] = useState([]);
  const [showAddEditUser, setShowAddEditUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUser);
        setUsers(response.data);
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const componentNew = (select) => {
    setShowAddEditUser(select);
  };

  const handleUserSubmit = async (id, data) => {
    try {
      if (id) {
        // Realizar solicitud PUT para actualizar el usuario con el ID proporcionado
        const response = await axios.put(`${apiUser}${id}/`, data);
        console.log(response.data);
      } else {
        // Realizar solicitud POST para agregar un nuevo usuario
        const response = await axios.post(apiUser, data);
        console.log(response.data);
      }
      // Actualizar la lista de usuarios después de agregar/editar el usuario
      const updatedUsers = await axios.get(apiUser);
      setUsers(updatedUsers.data);
      setShowAddEditUser(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormCancel = () => {
    setShowAddEditUser(false);
  };

  return (
    <Admin>
      {showAddEditUser ? (
        <AddEditUser
          onSubmit={handleUserSubmit}
          onCancel={handleFormCancel}
        />
      ) : (
        <TableUser users={users} componentNew={componentNew} />
      )}
    </Admin>
  );
}

export default User;
