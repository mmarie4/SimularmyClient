import { useTranslation } from 'react-i18next';

import Headline from "../components/Headline"
import InputField from "../components/InputField"
import PrimaryButton from "../components/PrimaryButton"
 
const LoginPage = (props) => {
  const { t } = useTranslation();
    return (
      <div class="w-6/12 p-16 m-auto flex flex-col space-between border-2 rounded-md bg-white">
        <p class="text-center w-full text-lg font-bold pb-8">{t("login.title")}</p>
        <Headline translationKey="login.password_title"/>
        <InputField
          type="password"
        />
        <div class="pt-8 text-center w-full">
          <PrimaryButton
            translationKey="login.button"
            onClick={() => onClickSubmit(props)}
          />
        </div>
      </div>
    );
}

const async onClickSubmit = (props) => {
  // TODO: Get access token
  props.navigate("home");
}
 
export default LoginPage;