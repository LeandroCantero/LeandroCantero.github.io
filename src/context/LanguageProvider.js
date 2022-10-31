import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState([]);

    return (
        <LanguageContext.Provider
        value={{
            lang,
            setLang
        }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export {
    LanguageProvider
}

export default LanguageContext;