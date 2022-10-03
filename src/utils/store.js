const store = {
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    save: (key, object) => {
        localStorage.setItem(key, JSON.stringify(object));
    }
}

export default store;