import getTranslation from "./getTranslation";
import getDictionaryWord from "./getDictionaryWord";
import handleError from "./handleError";

const translate = dictionary => language => word => {
  try {
    return getTranslation(language)(getDictionaryWord(dictionary)(word));
  } catch (error) {
    return handleError(error);
  }
};

export default translate;
