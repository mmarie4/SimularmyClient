import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";

import store from "../utils/store";

import PrimaryButton from "../components/PrimaryButton"
import Toast from "../components/Toast";

const HomePage = () => {
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const me = store.get('me');

    return (
      <div class="w-9/12 m-auto h-9/12 p-4">

        <div class="w-full border border-gray-300 rounded flex justify-between p-4 bg-white text-xs shadow mb-12">
          <div class="flex flex-col justify-between h-full">
            <p class="text-lg font-bold">{me.pseudo}</p>
            <p>Rank</p>
          </div>
          <div class="text-right">
            <p class="mb-2">6 wizards - 4 trolls - 2 knights</p>
            <PrimaryButton translationKey="home.manage_army" isEnabled={true} />
          </div>
        </div>

        <div class="w-full border border-gray-300 rounded flex justify-between p-4 bg-white text-xs shadow mt-4 flex-col">
          <p class="w-full text-lg font-bold mb-8 border-b">Battles</p>
          <div class="font-bold">Stats</div>
          <div class="flex iems-center justify-between">
            <p>16437 battles</p>
            <p>4567 victories</p>
            <p>3456 defeats</p>
          </div>

          <div class="p-8 mt-12 flex justify-center">
            <button class="text-xl bg-blue-700 py-6 px-32 rounded text-gray-200 font-bold hover:bg-blue-900">
              {t('home.find_opponent')}
            </button>
          </div>
        </div>

        <Toast content={errorMessage}/>

      </div>
    );
}

const onError = (errorMessage, setErrorMessage) => {
  setErrorMessage(errorMessage);
  setTimeout(() => setErrorMessage(undefined), 1000);
}

export default HomePage;