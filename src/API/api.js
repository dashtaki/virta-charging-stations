import axios from 'axios'

export const getAllTransactions = () => {
    return axios.get(`http://localhost:3000/stations-data.json`)
}
