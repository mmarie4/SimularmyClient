import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import http from "../utils/http";
import store from "../utils/store";
import { requireEmail, checkToken } from '../utils/validations';

import Headline from "../components/Headline"
import InputField from "../components/InputField"
import PrimaryButton from "../components/PrimaryButton"
import Toast from '../components/Toast';

const form = {
  isLoading: false
}
 
const LoginPage = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    checkToken(navigate);
    requireEmail(navigate, form);
  });

  return (
    <div class="w-6/12 p-16 m-auto flex flex-col space-between border-2 rounded-md bg-white">
      <p class="text-center w-full text-lg font-bold pb-8">{t("login.title")}</p>
      <Headline translationKey="login.password_title"/>
      <InputField
        type="password"
        onChange={e => onInputChange(e, setButtonEnabled)}
        onEnter={async () => await onClickSubmit(navigate, setErrorMessage)}
      />
      <div class="pt-8 text-center w-full">
        <PrimaryButton
          translationKey="login.button"
          onClick={async () => await onClickSubmit(navigate, setErrorMessage)}
          isEnabled={buttonEnabled}
        />
      </div>
      <Toast content={errorMessage}/>
    </div>
  );
}

const onInputChange = (event, setButtonEnabled) => {
  form.password = event.target.value;
  setButtonEnabled(!form.isLoading && form.password != undefined && form.password != "")
}

const onError = (errorMessage, setErrorMessage) => {
  setErrorMessage(errorMessage);
  setTimeout(() => setErrorMessage(undefined), 1000);
}

const onClickSubmit = async (navigate, setErrorMessage) => {
  form.isLoading = true;
  const request = {
    endpoint: `api/players/login`,
    content: { email: form.email, password: form.password },
    errorCallback: (errorMessage) => onError(errorMessage, setErrorMessage)
  }
  const response = await http.post(request);
  form.isLoading = false;

  if (response) {
    store.save("me", response);
    navigate("/home", {replace: true})
  }
}
 
export default LoginPage;