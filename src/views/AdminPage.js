import React, { useEffect, useState } from "react";

import http from "../utils/http";

import Toast from '../components/Toast';

const AdminPage = (props) => {
    const [message, setMessage] = useState("Refreshing units cache from database...");
    const [errorMessage, setErrorMessage] = useState(undefined);

    useEffect(() => {
        const refresh = async () => {
            const request = {
                endpoint: `api/units/refresh`,
                content: { },
                errorCallback: (errorMessage) => onError(errorMessage, setErrorMessage)
              }
              const response = await http.post(request);
              if (response?.status == 204) {
                setMessage("Units cache updated")
              }
        }
        refresh()
    })

    return (
        <div>
            <div>
                {message}
            </div>
            <Toast content={errorMessage}/>
        </div>
    )
}

const onError = (errorMessage, setErrorMessage) => {
    setErrorMessage(errorMessage);
    setTimeout(() => setErrorMessage(undefined), 1000);
  }

export default AdminPage