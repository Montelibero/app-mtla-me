import { I18nType, enTranslations, ruTranslations } from '@/shared/lib/i18n';
import { useLanguageContext } from './use-language-context';

type Translations = {
    [key: string]: I18nType;
};

const translations: Translations = {
    en: enTranslations,
    ru: ruTranslations,
};

export const useTranslations = () => {
    const { locale } = useLanguageContext();

    return translations[locale];
};
