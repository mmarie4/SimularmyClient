import { useTranslation } from 'react-i18next';
 
const InputField = (props) => {
  const { t } = useTranslation();
    return (
        <input
        class="p-2 rounded border-gray-200 border-2 text-gray-800 mb-6 bg-gray-100 h-8 text-gray-500 outline-none"
        type={props.type}
        placeholder={t(props.translationKeyPlaceholder)}
        onChange={props.onChange}
        onKeyPress={(e) => onKeyPress(e, props.onEnter)}
        autoComplete="on"
      />
    );
}

const onKeyPress = (e, onEnter) => {
  if (e.key == 'Enter' && onEnter) {
    onEnter();
  }
}
 
export default InputField;