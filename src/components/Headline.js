import { useTranslation } from 'react-i18next';
 
const PrimaryText = (props) => {
  const { t } = useTranslation();
    return (
        <div class="mb-2">
            <p class="font-bold text-md text-gray-600">{t(props.translationKey)}</p>
            {props.secondaryKey
                ? <p class="text-xs text-gray-400">{t(props.secondaryKey)}</p>
                : null
            }
        </div>
    );
}
 
export default PrimaryText;