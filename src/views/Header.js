import { getLocaleToDisplay } from "../translations/i18n"

const Header = () => {
    return (
        <div class="p-4 w-full h-12 bg-white static flex justify-between items-center">
            <p class="font-bold text-md">Simularmy</p>
            <p class="font-bold text-xs text-gray-400 cursor-pointer">{getLocaleToDisplay()}</p>
        </div>
    )
}

export default Header;