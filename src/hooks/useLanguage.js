import { useContext, useEffect  } from "react";
import LanguageContext from "../context/language/LanguageProvider";

export default function useLanguage() {
    const { userLanguage, userLanguageChange, dictionary } = useContext(
        LanguageContext
    );

    const handleSelectSpanish = e => userLanguageChange('es');
    const handleSelectEnglish = e => userLanguageChange('en');

    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('rcml-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        userLanguageChange(defaultLanguage);
    }, [userLanguageChange]);

    return (
        <div className="Language-selector">
          <p className="Language-selector__es" onClick={handleSelectSpanish}>
            {dictionary['spanish']}
          </p>
          {' | '}
          <p className="Language-selector__en" onClick={handleSelectEnglish}>
            {dictionary['english']}
          </p>
        </div>
      );

}