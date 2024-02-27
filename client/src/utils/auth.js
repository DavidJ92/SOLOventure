import axios from "axios";

const API_URL = 'http://localhost:4000/graphql'; // Replace with your API 

const Auth = {
    register: async (userData) => {
        try {
            const response = await axios.post(`${API_URL}/register`, userData);
            return response.data;
        } catch (error) {
            console.error('Error registering user', error);
            throw error;
        }
    },
    login: async (userData) => {
        try {
            const response = await axios.post(`${API_URL}/login`, userData);
            return response.data;
        } catch (error) {
            console.error('Error logging in user', error);
            throw error;
        }
    },

    logout: async () => {
        try {
            return {success: true, message: 'You are now logged out.'};
        } catch (error) {
            console.error('Error logging out user', error);
            throw error;
        }
    },
    isAuthenticated: async () => {
       return !!localStorage.getItem('accessToken');
    }
};

export default Auth;