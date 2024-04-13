import React from 'react';
import clsx from 'clsx';
import { useLanguageContext } from '@/shared/lib/hooks';

const LanguageSwitcher = () => {
    const { locale, changeLanguage } = useLanguageContext();

    return (
        <div className='lang-switcher'>
            <span
                className={clsx({ active: locale === 'en' })}
                onClick={() => changeLanguage('en')}>
                EN
            </span>
            <span
                className={clsx({ active: locale === 'ru' })}
                onClick={() => changeLanguage('ru')}>
                RU
            </span>
        </div>
    )
}

export default LanguageSwitcher