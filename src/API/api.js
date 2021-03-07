// TODO: error handling
// TODO: move to another file
import axios from 'axios';

export const getAllTransactions = async () => {
    const response = await axios.get(`stations-data.json`);
    return response.data
}
