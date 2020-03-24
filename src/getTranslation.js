const getTranslation = language => dictionaryWord =>
  dictionaryWord.translations.filter(t => t.language === language)[0].word;

export default getTranslation;
