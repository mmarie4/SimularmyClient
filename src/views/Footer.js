import React, { useState } from "react";

import Modal from "../components/Modal"

const Footer = () => {
    const [contactModelOpen, openContactModal] = useState(false);

    const footer = [
        <div class="py-1 px-2 w-full bg-white static flex justify-between items-center">
            <p class="font-bold text-xs cursor-pointer text-gray-500" onClick={() => openContactModal(true)}>Contact</p>
            <p class="text-xs text-gray-500">2022</p>
        </div>
    ]

    if (contactModelOpen) {
        footer.push(
            <Modal jsxContent={jsxModal} onClickBackground={openContactModal}/>
        )
    }

    return footer;
}

const jsxModal = (
    <div class="flex flex-col p-8">
        <div class="mb-2">max.marie.4@gmail.com</div>
        <a href="https://github.com/mmarie4" target="_blank" class="text-blue-700 font-bold">https://github.com/mmarie4</a>
    </div>
)

export default Footer;