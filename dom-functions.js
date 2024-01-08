import { encoder } from "./english-to-morse.js";
import { decoder } from "./morse-to-english.js";

//default select detect radio btn on load
document.querySelector("#detect").checked = true;

// auto-resizes textarea height
document.querySelector("textarea").addEventListener("input", e => {
  document.querySelector(".translations-container").style.height = "185px";
  document.querySelector(".output-field").style.height = "185px";
  let scHeight = e.target.scrollHeight;
  document.querySelector(".translations-container").style.height = `${scHeight}px`;
  document.querySelector(".output-field").style.height = `${scHeight}px`;
})

//resizes output field to fit paragraph morse
const resizeOutputField = () => {
  const outputHeight = document.querySelector("p").scrollHeight;
  if (outputHeight > document.querySelector("textarea").scrollHeight) {
    document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
    document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
  }
}

//adding input to textarea translates either way
//the below works until user tries to mix inputs

document.querySelector("textarea").addEventListener("input", () => {

  const userInputArr = document.querySelector("textarea").value.split("");

  function checkMorseChars(char) {
    return /[\s\.\-\/]/.test(char);
  };

  //autocheck aka detect langugae;
  if (document.querySelector("#detect").checked) {
    if (userInputArr.every(checkMorseChars) && userInputArr[0]) {
      //run decoder aka assume morse
      document.querySelector("#detectLabel").innerText = "Morse - Detected";
      document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);
    } else {
      //run encoder aka assume english
      document.querySelector("#detectLabel").innerText = "English - Detected";
      document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);
    }
  }

  if (document.querySelector("#english").checked) {
    document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);
  };

  if (document.querySelector("#morse").checked) {
    document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);
  }

  resizeOutputField();
});

//checking radio buttons runs the relevant function
document.querySelector("#english").addEventListener("click", () => {
  document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);

  resizeOutputField();
});

document.querySelector("#morse").addEventListener("click",  () => {
  document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);

  resizeOutputField();
});

document.querySelector("#detect").addEventListener("click", () => {
  const userInputArr = document.querySelector("textarea").value.split("");

  function checkMorseChars(char) {
    return /[\s\.\-\/]/.test(char);
  };

  if (userInputArr.every(checkMorseChars) && userInputArr[0]) {
    //run decoder aka assume morse
    document.querySelector("#detectLabel").innerText = "Morse - Detected";
    document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);
  } else {
    //run encoder aka assume english
    document.querySelector("#detectLabel").innerText = "English - Detected";
    document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);
  };

  resizeOutputField();
})



//for old buttons, not radio btns
//clicking encoder button eng to morse
// document.querySelector("#encoderBtn").addEventListener("click", () => {
//   document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);

//   //resize output field to fit overflowing paragraph morse
//   const outputHeight = document.querySelector("p").scrollHeight;
//   if (outputHeight > document.querySelector("textarea").scrollHeight) {
//     document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
//     document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
//   }
// });

// //clicking decoder button morse to eng
// document.querySelector("#decoderBtn").addEventListener("click", () => {
//   document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);

//   //resize output field to fit overflowing paragraph morse
//   const outputHeight = document.querySelector("p").scrollHeight;
//   if (outputHeight > document.querySelector("textarea").scrollHeight) {
//     document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
//     document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
//   }
// });