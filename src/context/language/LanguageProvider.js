import React from 'react'
import { createContext, useState } from 'react';
import dictionaryList from './dictionaryList';
import languageOptions from './languageOptions';

export const LanguageContext = createContext({
    userLanguage: 'es',
    dictionary: dictionaryList.es,
    userLanguageChange: null,
  });

const LanguageProvider = ({children}) => {
    const [userLanguage, setUserLanguage] = useState('es');

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
          const newLanguage = languageOptions[selected] ? selected : 'es';
          setUserLanguage(newLanguage);
          window.localStorage.setItem('rcml-lang', newLanguage);
        },
      };

      return (
        <LanguageContext.Provider value={provider}>
          {children}
        </LanguageContext.Provider>
      );
}

export {
    LanguageProvider
}

export default LanguageContext;