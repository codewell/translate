const handleError = error => {
  switch (error.message) {
    case "Cannot read property 'translations' of undefined": {
      console.error(`${error.message}. Is the word in the dictionary?`);
      return null;
    }

    case "Cannot read property 'word' of undefined": {
      console.error(
        `${error.message}. Does the specified language exist in the dictionary?`
      );
      return null;
    }

    default: {
      return null;
    }
  }
};

export default handleError;
