const store = {
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    save: (key, object) => {
        localStorage.setItem(key, JSON.stringify(object));
    },
    remove: (key) => {
        localStorage.removeItem(key);
    }
}

export default store;