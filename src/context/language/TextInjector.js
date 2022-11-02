import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';

const TextInjector = ({ textId }) => {
  const { dictionary } = useContext(LanguageContext);

  return dictionary[textId] || textId;
};

export default TextInjector;