import axios from "axios";

const API_URL = 'http://localhost:4000/graphql'; // Replace with your API

class API {
    static async fetchData(endpoint) {
        try {
            const response = await axios.get(`${API_URL}/${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }
    static async postData(endpoint, data) {
        try {
            const response = await axios.post(`${API_URL}/${endpoint}`, data);
            return response.data;
        } catch (error) {
            console.error('Error posting data', error);
            throw error;
        }
    }
}

export default API;