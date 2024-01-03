import { encoder } from "./english-to-morse.js";
import { decoder } from "./morse-to-english.js";

// auto-resizes textarea height
document.querySelector("textarea").addEventListener("input", e => {
  document.querySelector(".translations-container").style.height = "185px";
  document.querySelector(".output-field").style.height = "185px";
  let scHeight = e.target.scrollHeight;
  document.querySelector(".translations-container").style.height = `${scHeight}px`;
  document.querySelector(".output-field").style.height = `${scHeight}px`;
})

//clicking encoder button eng to morse
document.querySelector("#encoderBtn").addEventListener("click", () => {
  document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);

  //resize output field to fit overflowing paragraph morse
  const outputHeight = document.querySelector("p").scrollHeight;
  if (outputHeight > document.querySelector("textarea").scrollHeight) {
    document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
    document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
  }
});

//clicking decoder button morse to eng
document.querySelector("#decoderBtn").addEventListener("click", () => {
  document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);

  //resize output field to fit overflowing paragraph morse
  const outputHeight = document.querySelector("p").scrollHeight;
  if (outputHeight > document.querySelector("textarea").scrollHeight) {
    document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
    document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
  }
});

//adding input to textarea translates eng to morse
//this was working
// document.querySelector("textarea").addEventListener("input", () => {
//   //DISABLEFOR NOW AND MAKE BUTTON ONLY TO TEST DECODERdocument.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);

//   //resize output field to fit overflowing paragraph morse
//   const outputHeight = document.querySelector("p").scrollHeight;
//   if (outputHeight > document.querySelector("textarea").scrollHeight) {
//     document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
//     document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
//   }
// });

//adding input to textarea translates either way
//the below works until user tries to mix inputs
document.querySelector("textarea").addEventListener("input", () => {

  const userInputArr = document.querySelector("textarea").value.split("");

  function checkMorseChars(char) {
    return /[\s\.\-\/]/.test(char);
  }

  if (userInputArr.every(checkMorseChars)) {
    //run decoder aka assume morse
    console.log("working there");
    console.log(userInputArr);
    document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);
  } else {
    //run encoder aka assume english
    console.log("working here");
    document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);
  }

  //resize output field to fit overflowing paragraph morse
  const outputHeight = document.querySelector("p").scrollHeight;
  if (outputHeight > document.querySelector("textarea").scrollHeight) {
    document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
    document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
  }
});