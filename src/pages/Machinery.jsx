import Admin from "../layout/PageAdmin" // Importa el componente "Admin" desde el archivo "../layout/PageAdmin"
import '../assets/css/styles.css' // Importa el archivo CSS de estilos
import TableMachinery from "../services/TableMachinery" // Importa el componente "TableMachinery"
import { useEffect, useState } from "react" // Importa los hooks useEffect y useState de React
import axios from "axios" // Importa la biblioteca Axios
import AddEditMachinery from "../services/AddEditMachinery" // Importa el componente "AddEditMachinery"

function Machinery() {
  const apiMachinery = "https://proalarmepp.onrender.com/api/machinery/" // URL de la API de maquinarias

  const [machineries, setMachineries] = useState([]) // Estado para almacenar las maquinarias obtenidas de la API
  const [listAddMachinery, setListAddMachinery] = useState(false) // Estado para controlar si se muestra el formulario de agregar/editar maquinarias

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiMachinery) // Realiza una solicitud GET a la API de maquinarias
        setMachineries(response.data) // Actualiza el estado "machineries" con los datos de respuesta
        console.log(response.data) // Muestra los datos de respuesta en la consola
      } catch (e) {
        console.error(e) // Muestra cualquier error en la consola
      }
    }
    fetchData() // Ejecuta la función fetchData al montar el componente
  }, []) // El segundo argumento vacío [] indica que se debe ejecutar solo una vez al montar el componente

  const componentNew = (select) => {
    setListAddMachinery(select) // Actualiza el estado "listAddMachinery" con el valor del argumento "select"
  }

  return (
    <Admin>
      {listAddMachinery ? (
        <AddEditMachinery /> // Muestra el formulario de agregar/editar maquinarias si "listAddMachinery" es verdadero
      ) : (
        <TableMachinery
          machineries={machineries}
          componentNew={componentNew}
        /> // Muestra la tabla de maquinarias con las propiedades "machineries" y "componentNew"
      )}
    </Admin>
  )
}

export default Machinery // Exporta el componente Machinery
