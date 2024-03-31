'use client';

import { createContext, useContext } from 'react';

type LanguageContextType = {
    locale: string;
    changeLanguage: (newLocale: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
    locale: 'ru',
    changeLanguage: (newLocale: string) => { },
});

export const useLanguageContext = () => useContext(LanguageContext);
