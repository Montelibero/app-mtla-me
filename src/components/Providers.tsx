'use client';

import { LanguageContext } from "@/hooks/useLanguageContext";
import { useEffect, useState } from "react";

export function Providers({ children }: any) {
    const [locale, setLocal] = useState('en');

    useEffect(() => {
        const storedLanguage = localStorage.getItem('lang');

        if (storedLanguage) {
            setLocal(storedLanguage);
        }
    }, []);

    const changeLanguage = (lang: string) => {
        localStorage.setItem('lang', lang);

        setLocal(lang);
    };

    return (
        <LanguageContext.Provider value={{locale, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}