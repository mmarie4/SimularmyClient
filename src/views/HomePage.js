import { useNavigate } from "react-router-dom";

import PrimaryButton from "../components/PrimaryButton"

const HomePage = () => {
    return (
      <div class="w-9/12 m-auto h-9/12 p-4">
        <div class="w-full border border-gray-300 rounded flex justify-between p-4 bg-white text-xs shadow">
          <div class="flex flex-col justify-between h-full">
            <p class="text-lg font-bold">Nickname</p>
            <p>Rank</p>
          </div>
          <div class="text-right">
            <p class="mb-2">6 wizards - 4 trolls - 2 knights</p>
            <PrimaryButton translationKey="home.manage_army" isEnabled={true} />
          </div>
        </div>

        <div class="w-full border border-gray-300 rounded flex justify-between items-center p-4 bg-white text-xs mt-4 shadow">
          <p class="w-full text-lg font-bold mb-8 border-b">Find a battle</p>
        </div>

        <div class="w-full border border-gray-300 rounded p-4 bg-white text-xs mt-4 shadow">
          <p class="w-full text-lg font-bold mb-8 border-b">Statistics</p>
          <div class="flex iems-center justify-between">
            <p>16437 battles</p>
            <p>4567 victories</p>
            <p>3456 defeats</p>
          </div>
        </div>


      </div>
    );
}
 
export default HomePage;