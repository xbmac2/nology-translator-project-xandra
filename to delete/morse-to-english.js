export const decoder = (stringToDecode) => {
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

//decoder("----- ----. / .- -- / -.-. --- .-. .--. --- .-. .. ... / ... ..- ... -.-. .. .--. .. - / .-.. .- -... --- .-. .. --- ... .- -- / -. .. ... .. / ..- - ");