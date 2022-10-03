import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import http from "../utils/http";
import store from "../utils/store";
import { checkToken } from "../utils/validations";

import PrimaryButton from "../components/PrimaryButton"
import Headline from "../components/Headline"
import InputField from "../components/InputField"

const form = {
  isLoading: false
}

const LandingPage = (props) => {
  const navigate = useNavigate();
  useEffect(() => checkToken(navigate));
  const [buttonEnabled, setButtonEnabled] = useState(false);
  return (
    <div class="w-6/12 p-16 m-auto flex flex-col space-between border-2 rounded-md bg-white">
      <Headline
        translationKey="landing.title"
      />
      <InputField
        translationKeyPlaceholder="landing.input_placeholder"
        type="email"
        onChange={e => onInputChange(e, setButtonEnabled)}
      />
      <div class="mt-6 text-center">
        <PrimaryButton
          translationKey="landing.button"
          onClick={async () => await onClickEnter(navigate)}
          isEnabled={buttonEnabled}
        />
      </div>
    </div>
  );
  }

const onInputChange = (event, setButtonEnabled) => {
  form.email = event.target.value;
  setButtonEnabled(!form.isLoading && form.email != undefined && form.email != "")
} 

const onClickEnter = async (navigate) => {
  form.isLoading = true;
  const response = await http.get({endpoint: `api/players/exists/${form.email}`});
  form.isLoading = false;
  store.save("me", {email: form.email})
  if (response.exists)
    navigate("login");
  else
    navigate("signup")
}
 
export default LandingPage;