import PrimaryButton from "../components/PrimaryButton"
import Headline from "../components/Headline"
import InputField from "../components/InputField"
import http from "../utils/http";

const state = {
  isLoading: false
}
 
const LandingPage = (props) => {
    return (
      <div class="w-6/12 p-16 m-auto flex flex-col space-between border-2 rounded-md bg-white">
        <Headline
          translationKey="landing.title"
        />
        <InputField
          translationKeyPlaceholder="landing.input_placeholder"
          type="email"
          onChange={e => state.email = e.target.value}
        />
        <div class="mt-6 text-center">
          <PrimaryButton
            translationKey="landing.button"
            onClick={() => onClickEnter(props)}
            isEnabled={!state.isLoading}
          />
        </div>
      </div>
    );
  }

const onClickEnter = async (props) => {
  state.isLoading = true;
  const response = await http.get({endpoint: `api/players/exists/${state.email}`});
  state.isLoading = false;
  console.log(response)
  console.log(response.exists)
  if (response.exists)
    props.navigate("login");
  else
    props.navigate("signup")
}
 
export default LandingPage;