'use strict';

var getTranslation = function getTranslation(language) {
  return function (dictionaryWord) {
    return dictionaryWord.translations.filter(function (t) {
      return t.language === language;
    })[0].word;
  };
};

// True if a word is represented in
// any of the words translations
var inTranslation = function inTranslation(word) {
  return function (dictionaryWord) {
    return dictionaryWord.translations.map(function (translation) {
      return translation.word;
    }).includes(word);
  };
};

// includes the provided word

var getDictionaryWord = function getDictionaryWord(dictionary) {
  return function (word) {
    var matchingWords = dictionary.words.filter(inTranslation(word));
    return matchingWords[0];
  };
};

var handleError = function handleError(error) {
  switch (error.message) {
    case "Cannot read property 'translations' of undefined":
      {
        console.error("".concat(error.message, ". Is the word in the dictionary?"));
        return null;
      }

    case "Cannot read property 'word' of undefined":
      {
        console.error("".concat(error.message, ". Does the specified language exist in the dictionary?"));
        return null;
      }

    default:
      {
        return null;
      }
  }
};

var translate = function translate(dictionary) {
  return function (language) {
    return function (word) {
      try {
        return getTranslation(language)(getDictionaryWord(dictionary)(word));
      } catch (error) {
        return handleError(error);
      }
    };
  };
};

module.exports = translate;
