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

//one button translates either way
document.querySelector("#oneTranslateBtn").addEventListener("click", () => {
  const userInput = document.querySelector("#userInput").value;

  if (/[\s\.\-\/]/.test(userInput)) {
    document.querySelector("#translatedOutput").innerText = decoder(document.querySelector("#userInput").value);
  } else {
    document.querySelector("#translatedOutput").innerText = encoder(document.querySelector("#userInput").value);
  };
  //resize output field to fit overflowing paragraph morse
  const outputHeight = document.querySelector("p").scrollHeight;
  if (outputHeight > document.querySelector("textarea").scrollHeight) {
    document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
    document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
  };
});

// clear button clears input 
document.querySelector("#clearBtn").addEventListener("click", () => {
  document.querySelector("#userInput").value = "";
})