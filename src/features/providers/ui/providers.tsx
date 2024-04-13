'use client';

import { LanguageContext } from "@/shared/lib/hooks";
import { ReactNode, useEffect, useState } from "react";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
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