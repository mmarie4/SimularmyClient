import axios from "axios";

const apiUrl = "http://51.38.68.118:5001";

const http = {
    post: async ({ endpoint, content }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        const result = await axios.post(`${apiUrl}/${endpoint}`, content, { headers })
        // TODO: check error code and handle error with a callback
        return result?.data;

    },

    get: async ({ endpoint }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        const result = await axios.get(`${apiUrl}/${endpoint}`, { headers });
        // TODO: check error code and handle error with a callback
        return result?.data;
    },

    put: async ({ endpoint, content }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        const result = await axios.put(`${apiUrl}/${endpoint}`, content, { headers });
        // TODO: check error code and handle error with a callback
        return result?.data;
    },
    
    delete: async ({ endpoint }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        const result = await axios.delete(`${apiUrl}/${endpoint}`, { headers });
        // TODO: check error code and handle error with a callback
        return result?.data;
    }
}

const addAuthorizationHeader = (headers) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`
    }
}

export default http;