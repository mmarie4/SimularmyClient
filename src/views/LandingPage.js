import PrimaryButton from "../components/PrimaryButton"
import Headline from "../components/Headline"
import InputField from "../components/InputField"
import http from "../utils/http";

import React, { useState } from "react";

const form = {
  isLoading: false
}

const LandingPage = (props) => {
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
            onClick={() => onClickEnter(props)}
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

const onClickEnter = async (props) => {
  form.isLoading = true;
  const response = await http.get({endpoint: `api/players/exists/${form.email}`});
  form.isLoading = false;
  if (response.exists)
    props.navigate("login");
  else
    props.navigate("signup")
}
 
export default LandingPage;