import axios from 'axios';

export const getAllTransactions = async () => {
    const response = await axios.get(`stations-data.json`);
    return response.data
}
