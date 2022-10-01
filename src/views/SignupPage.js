import { useTranslation } from 'react-i18next';
import Headline from "../components/Headline"
import InputField from "../components/InputField"
import PrimaryButton from "../components/PrimaryButton"
 
const SignupPage = (props) => {
  const { t } = useTranslation();
    return (
      <div class="w-6/12 p-16 m-auto flex flex-col space-between border-2 rounded-md bg-white">
        <p class="text-center w-full text-lg font-bold pb-8">{t("signup.title")}</p>
        <Headline translationKey="signup.nickname_title" secondaryKey="signup.nickname_details"/>
        <InputField
          type="text"
        />
        <Headline translationKey="signup.password_title" secondaryKey="signup.password_details"/>
        <InputField
          type="password"
        />
        <Headline translationKey="signup.password_confirmation_title"/>
        <InputField
          type="password"
        />
        <div class="pt-8 text-center w-full">
          <PrimaryButton
            translationKey="signup.button"
            onClick={() => onClickSubmit(props)}
          />
        </div>
      </div>
    );
}

const onClickSubmit = (props) => {
  // TODO: Register account
  props.navigate("home");
}
 
export default SignupPage;