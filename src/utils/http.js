import axios from "axios";

const apiUrl = "http://51.38.68.118:5001";

const http = {
    post: async ({ endpoint, content, errorCallback }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        try {
            const result = await axios.post(`${apiUrl}/${endpoint}`, content, { headers })
            return result?.data;
        }
        catch (e) {
            handleError(e?.response, errorCallback);
        }

    },

    get: async ({ endpoint, errorCallback }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        try {
            const result = await axios.get(`${apiUrl}/${endpoint}`, { headers });
            return result?.data;
        }
        catch (e) {
            handleError(e?.response, errorCallback);
        }
    },

    put: async ({ endpoint, content, errorCallback }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        try {
            const result = await axios.put(`${apiUrl}/${endpoint}`, content, { headers });
            return result?.data;
        }
        catch (e) {
            handleError(e?.response, errorCallback);
        }
    },
    
    delete: async ({ endpoint, errorCallback }) => {
        const headers = {};
        addAuthorizationHeader(headers);
        try {
            const result = await axios.delete(`${apiUrl}/${endpoint}`, { headers });
            return result?.data;
        }
        catch (e) {
            handleError(e?.response, errorCallback);
        }
    }
}

const addAuthorizationHeader = (headers) => {
    const me = JSON.parse(localStorage.getItem("me"))
    if (me) {
        headers["Authorization"] = `Bearer ${me.token}`
    }
}

const handleError = (result, errorCallback) => {
    if (result.status == 500)
        errorCallback("Internal server error");
    if ([400, 401, 403, 404].includes(result.status))
        errorCallback(result?.data?.error || "Unknown error");
}

export default http;
