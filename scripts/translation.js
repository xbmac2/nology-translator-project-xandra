const cypherAlphabet = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "V": "...-",
  "U": "..-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
};

const cypherNumerals = {
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----"
};

//english to morse
export const encoder = (stringToEncode) => {

  if (/[^0-9A-Za-z\s]/.test(stringToEncode)) {
    throw new Error("Only encodes letters and numbers - don't include special characters")
  }

  //creates array of uppercase characters and / for spaces
  const capitalisedStr = stringToEncode.toUpperCase().replaceAll(" ", "/");
  const messageArr = Array.from(capitalisedStr);
  const cleanedMessageArr = messageArr.filter((char) => /[0-9A-Z\/]/.test(char));
  //iterates over array to make characters into morse strings
  let morseArr = [];
  for (let i = 0; i < cleanedMessageArr.length; i++) {
    if (/[A-Z]/.test(cleanedMessageArr[i])) {
      morseArr.push(cypherAlphabet[cleanedMessageArr[i]]);
    } else if (cleanedMessageArr[i] === "/") {
      morseArr.push("/")
    } else if (/[0-9]/.test(cleanedMessageArr[i])) {
      morseArr.push(cypherNumerals[cleanedMessageArr[i]]);
    };
  };
  const morseStr = morseArr.join(" ");
  return morseStr;
};

//morse to english
export const decoder = (stringToDecode) => {

  if (/[^\.\-\/\s]/.test(stringToDecode)) {
    throw new Error("Only decodes morse - don't include letters or numbers")
  }

  const cleanMorseArr = stringToDecode.split(" ");
  //iterates over array to make morse string to letters
  let englishArr = [];
  for (let i = 0; i < cleanMorseArr.length; i++) {
    if (Object.values(cypherAlphabet).includes(cleanMorseArr[i])) {
      englishArr.push(Object.keys(cypherAlphabet).find(key => cypherAlphabet[key] === cleanMorseArr[i]))
    } else if (Object.values(cypherNumerals).includes(cleanMorseArr[i])) {
      englishArr.push(Object.keys(cypherNumerals).find(key => cypherNumerals[key] === cleanMorseArr[i]))
    } else {
      englishArr.push(" ")
    }
  }
  const englishStr = englishArr.join("").toLowerCase();
  return englishStr;
}
