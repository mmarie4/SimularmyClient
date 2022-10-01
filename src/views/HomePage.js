import PrimaryButton from "../components/PrimaryButton"

const HomePage = () => {
    return (
      <div class="w-full h-full p-4">
        <div class="w-full border-2 border-gray-300 rounded flex justify-between p-4 bg-white text-xs">
          <div class="flex flex-col justify-between h-full">
            <p class="text-lg font-bold">Nickname</p>
            <p>Rank</p>
          </div>
          <div class="text-right">
            <p class="mb-2">6 wizards - 4 trolls - 2 knights</p>
            <PrimaryButton translationKey="home.manage_army" />
          </div>
        </div>

        <div class="w-full border-2 border-gray-300 rounded flex justify-between items-center p-4 bg-white text-xs mt-4">
          <p class="w-full text-lg font-bold pb-8">Find a battle</p>
        </div>

        <div class="w-full border-2 border-gray-300 rounded flex justify-between items-center p-4 bg-white text-xs mt-4">
          <p class="w-full text-lg font-bold pb-8">Statistics</p>
          <p>16437 battles</p>
          <p>4567 victories</p>
          <p>3456 defeats</p>
        </div>


      </div>
    );
}
 
export default HomePage;