// True if a word is represented in
// any of the words translations
const inTranslation = word => dictionaryWord =>
  dictionaryWord.translations
    .map(translation => translation.word)
    .includes(word);

export default inTranslation;
