import { getLocaleToDisplay } from "../translations/i18n"
import { getInitialProps, useTranslation } from 'react-i18next';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import store from "../utils/store";
import http from "../utils/http";

import PrimaryButton from "../components/PrimaryButton"
import DeleteButton from "../components/DeleteButton"
import InputField from "../components/InputField"
import Modal from "../components/Modal"
import Headline from "../components/Headline"

const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const currentLocale = getLocaleToDisplay();
    const simularmyState = store.get('simularmy-state');
    const [settingsExtended, extendSettings] = useState(simularmyState?.settingsExtended ?? false);
    const [updatePassworfModalOpen, openUpdatePasswordModal] = useState(false);
    const [deleteAccountModalOpen, openDeleteAccountModal] = useState(false);

    const headerJsx = [
        <div class="p-4 w-full h-12 bg-white static flex justify-between items-center shadow">
            <p class="font-bold text-xl">Simularmy</p>
                <div class="cursor-pointer h-6 w-6 opacity-50" onClick={() => onClickSettings(store, settingsExtended, extendSettings)}>
                    <img src="data:image/png;base64,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"></img>
            </div>
        </div>
    ]

    if (settingsExtended) {
        headerJsx.push(
            <div class="w-full text-right shadow border-t">
                <div class="flex flex-col bg-white p-1 items-end">
                    <div class="font-semibold text-gray-500 py-1 px-3 text-xs flex mb-6">
                        <div class={currentLocale == "EN" ? "font-bold" : "cursor-pointer font-semibold hover:text-gray-800"} onClick={() => onClickLocale('en', navigate)}>EN</div>
                        <div class="px-2"> - </div>
                        <div class={currentLocale == "FR" ? "font-bold" : "cursor-pointer font-semibold hover:text-gray-800"} onClick={() => onClickLocale('fr', navigate)}>FR</div>
                    </div>
                    <div class="font-semibold text-gray-500 py-1 px-3 cursor-pointer text-right text-xs hover:text-gray-800" onClick={() => openUpdatePasswordModal(true)}>{t('header.change_password')}</div>
                    <div class="font-semibold text-gray-500 py-1 px-3 cursor-pointer text-right text-xs hover:text-gray-800" onClick={() => onClickLogout(navigate, store, extendSettings)}>{t('header.logout')}</div>
                    <div class="font-semibold text-red-400 py-1 px-3 cursor-pointer text-right text-xs hover:text-red-700 mt-4" onClick={() => openDeleteAccountModal(true)}>{t('header.delete_account')}</div>
                </div>
            </div>
        )
    }

    if (updatePassworfModalOpen) {
        headerJsx.push(
            <Modal jsxContent={jsxUpdatePasswordModal} onClickBackground={openUpdatePasswordModal}/>
        )
    }

    if (deleteAccountModalOpen) {
        headerJsx.push(
            <Modal jsxContent={jsxDeleteAccountModal} onClickBackground={openDeleteAccountModal}/>
        )
    }

    return headerJsx;
}

const onClickSettings = (store, settingsExtended, extendSettings) => {
    const simularmyState = store.get('simularmy-state') ?? {};
    simularmyState.settingsExtended = !settingsExtended;
    store.save('simularmy-state', simularmyState)
    extendSettings(!settingsExtended);
}

const onClickLocale = (locale, navigate) => {
    localStorage.setItem("simularmy-locale", locale);
    navigate(0);
}

const onClickLogout = (navigate, store, extendSettings) => {
    extendSettings(false);
    store.remove("me");
    navigate("/");
}

const jsxUpdatePasswordModal = (
    <div class="flex flex-col p-8">
        <InputField type="password" translationKeyPlaceholder="header.current_password"/>
        <InputField type="password" translationKeyPlaceholder="header.new_password"/>
        <InputField type="password" translationKeyPlaceholder="header.confirm_new_password"/>
        <div class="text-center">
            <PrimaryButton onClick={() => alert("clicked!")} isEnabled={true} translationKey="header.update"/>
        </div>
    </div>
)

const jsxDeleteAccountModal = (
    <div class="flex flex-col p-8">
        <Headline type="password" translationKey="header.delete_account_headline"/>
        <div class="justify-center flex mt-8">
            <div class="mr-6"><PrimaryButton onClick={() => alert("clicked!")} isEnabled={true} translationKey="header.cancel"/></div>
            <DeleteButton onClick={() => alert("clicked!")} isEnabled={true} translationKey="header.delete"/>
        </div>
    </div>
)

export default Header;