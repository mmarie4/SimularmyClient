import store from "./store"

export const requireAuth = (navigate) => {
    const me = store.get("me");
    if (!me?.email) {
        navigate("/", { replace: true });
    }
}

export const requireEmail = (navigate, form) => {
    const me = store.get("me");
    if (!me?.email) {
        navigate("/", { replace: true });
        return;
    }
    form.email = me.email;
}

export const checkToken = (navigate) => {
    const me = store.get("me");
    if (me?.token) {
        navigate("/home", { replace: true });
    }
}