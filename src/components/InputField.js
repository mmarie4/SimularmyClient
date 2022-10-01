import { useTranslation } from 'react-i18next';
 
const InputField = (props) => {
  const { t } = useTranslation();
    return (
        <input
        class="p-2 rounded border-gray-200 border-2 text-gray-800 mb-6 bg-gray-100 h-8 text-gray-500"
        type={props.type}
        placeholder={t(props.translationKeyPlaceholder)}
      />
    );
}
 
export default InputField;