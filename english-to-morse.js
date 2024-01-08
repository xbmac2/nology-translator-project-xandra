export const encoder = (stringToEncode) => {
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