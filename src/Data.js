import axios from "axios"

const URLapi = "https://proalarmepp.onrender.com/api/person/"


export const viewPerson = async (xset) => {
    try {
        const respuesta = await axios.get(URLapi)
        xset(respuesta.data)
        return respuesta.data

    } catch (error) {
        console.log(error)
    }
}

export const personRegister = async (name , last_name , dni , number , email , date_birth , address , certifications,machinery) => {

    try {
        await axios.post(`${URLapi}`, {
            name,
            last_name,
            dni,
            number,
            email,
            date_birth,
            address,
            certifications,
            machinery
        });

    } catch (error) {
        console.log(error)
    }
}


export const personDelete = async (id) => {

    try {
        await axios.delete(`${URLapi}${id}`);
        console.log("usere eliminado")
    } catch (error) {
        console.log(error)
    }
}

export const personUpdate = async (id ,name , last_name , dni , number , email , date_birth , address , certifications,machinery) => {

    try {
        await axios.put(`${URLapi}${id}`, {
            name,
            last_name,
            dni,
            number,
            email,
            date_birth,
            address,
            certifications,
            machinery
        });

    } catch (error) {
        console.log(error)
    }
}