import { useTranslation } from 'react-i18next';
 
const PrimaryButton = (props) => {
  const { t } = useTranslation();
    return (
      <button onClick={props.onClick} class="text-sm bg-blue-800 text-gray-200 border-blue-700 rounded-lg py-2 px-4 font-bold mb-2">
        {t(props.translationKey)}
      </button>
    );
}
 
export default PrimaryButton;