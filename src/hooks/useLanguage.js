import { useContext, useEffect } from "react";
import LanguageContext from "../context/language/LanguageProvider";
import styles from "./UseLanguage.module.css"
import emoji from 'react-easy-emoji'


export default function useLanguage() {
  const { userLanguage, userLanguageChange } = useContext(
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
    <div className={styles.languageSelector}>
      <ul className={styles.emojiList}>
        <li className={styles.emoji} onClick={handleSelectSpanish}>
          {emoji('🇪🇸')}
        </li>
        <li className={styles.emoji} onClick={handleSelectEnglish}>
          {emoji('🇬🇧')}
        </li>
        <li></li>
      </ul>
    </div >
  );

}