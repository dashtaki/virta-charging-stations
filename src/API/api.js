import axios from 'axios'

export const getAllTransactions = async () => {
    const response = await axios.get(`http://localhost:3000/stations-data.json`)
    return response.data
}
