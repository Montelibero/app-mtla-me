import enTranslations from '@/i18n/enTranslations.json';
import ruTranslations from '@/i18n/ruTranslations.json';
import { useLanguageContext } from './useLanguageContext';
import { I18nType } from '@/i18n/types';

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
