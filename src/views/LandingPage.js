import PrimaryButton from "../components/PrimaryButton"
import Headline from "../components/Headline"
import InputField from "../components/InputField"
 
const LandingPage = (props) => {
    return (
      <div class="w-6/12 p-16 m-auto flex flex-col space-between border-2 rounded-md bg-white">
        <Headline
          translationKey="landing.title"
        />
        <InputField
          translationKeyPlaceholder="landing.input_placeholder"
          type="email"
        />
        <div class="mt-6 text-center">
          <PrimaryButton
            translationKey="landing.button"
            onClick={() => onClickEnter(props)}
          />
        </div>
      </div>
    );
  }

const onClickEnter = (props) => {
    const exists = false; // TODO: Call authentication strategy and go to signup / login page
    if (exists)
      props.navigate("login");
    else
      props.navigate("signup")
}
 
export default LandingPage;