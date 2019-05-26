import * as axios from 'axios'

const SERVER_URL = "http://192.168.0.107:5000"
const API = "/medicine"

const getMedicines = () => {
    console.log('in API get')
    return axios.get(SERVER_URL + API)
}

const addMedicine = medicine => {
    console.log('in API add')
    return axios.post(SERVER_URL + API, medicine)
}

const deleteMedicine = id => {
    console.log('in API del')
    return axios.delete(SERVER_URL + API + `/${id}`)
}

export default {
    getMedicines,
    addMedicine,
    deleteMedicine
}