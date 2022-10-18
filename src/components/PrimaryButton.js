import { useTranslation } from 'react-i18next';
 
const PrimaryButton = ({isEnabled, onClick, translationKey}) => {
  const { t } = useTranslation();

  if (isEnabled) {
    return (
      <button onClick={onClick} class="text-sm bg-blue-700 text-gray-200 border rounded py-2 px-4 font-bold mb-2 cursor-pointer hover:bg-blue-900">
        {t(translationKey)}
      </button>
    );
  }

  return (
    <button class="text-sm bg-blue-400 text-gray-100 border-blue-400 rounded-lg py-2 px-4 font-bold mb-2 cursor-default">
      {t(translationKey)}
    </button>
  );

}
 
export default PrimaryButton;