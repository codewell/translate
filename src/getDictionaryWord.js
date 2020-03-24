import inTranslation from "./inTranslation";

// Get the word from the dictionary that
// includes the provided word
const getDictionaryWord = dictionary => word => {
  const matchingWords = dictionary.words.filter(inTranslation(word));
  return matchingWords[0];
};

export default getDictionaryWord;
