import { useTranslation } from 'react-i18next';
 
const DeleteButton = ({isEnabled, onClick, translationKey}) => {
  const { t } = useTranslation();

  if (isEnabled) {
    return (
      <button onClick={onClick} class="text-sm bg-red-700 text-gray-200 border rounded py-2 px-4 font-bold mb-2 cursor-pointer hover:bg-red-900">
        {t(translationKey)}
      </button>
    );
  }

  return (
    <button class="text-sm bg-red-400 text-gray-100 border-red-400 rounded-lg py-2 px-4 font-bold mb-2 cursor-default">
      {t(translationKey)}
    </button>
  );

}
 
export default DeleteButton;