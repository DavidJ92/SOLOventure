import axios from axios;

const API_URL = 'http://localhost:4000/graphql'; // Replace with your API

const saveEntriesToLocalStorage = (entries) => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));

};

const getEntriesFromLocalStorage = () => {
    const storedEntries = localStorage.getItem('journalEntries');
    return storedEntries ? JSON.parse(storedEntries) : [];
};

const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('accessToken', token);
};

const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('accessToken');
};

const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
};

const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        const { token } = response.data;
        saveTokenToLocalStorage(token);
        return response.data;
    } catch (error) {
        console.error('Error logging in user', error);
        throw error;
    }
};

const logout = () => {
    removeTokenFromLocalStorage();
    return { success: true, message: 'You are now logged out.' };
};

const makePost = async (postData) => {
    try {
        const token = localStorage.getItem('accessToken');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await axios.post(`${API_URL}/posts`, postData, config);
        return response.data;
    } catch (error) {
        console.error('Error posting data', error);
        throw error;
    }
};

export { isAuthenticated, login, logout, makePost, saveEntriesToLocalStorage, getEntriesFromLocalStorage };