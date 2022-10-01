const requireAuth = (navigate) => {
    const token = window.sessionStorage.token;
    if (!token) {
        // TODO: Use refresh token to create new access token
        navigate.replace("landing");
    }
    // TODO: Check token validity
}

export default requireAuth;