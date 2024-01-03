import { encoder } from "./english-to-morse.js";

// auto-resizes textarea height
document.querySelector("textarea").addEventListener("input", e => {
  document.querySelector(".translations-container").style.height = "185px";
  document.querySelector(".output-field").style.height = "185px";
  let scHeight = e.target.scrollHeight;
  document.querySelector(".translations-container").style.height = `${scHeight}px`;
  document.querySelector(".output-field").style.height = `${scHeight}px`;
})

//clicking translate button eng to morse
document.querySelector("#translateBtn").addEventListener("click", () => {
  document.querySelector("#morseOutput").innerText = encoder(document.querySelector("#englishInput").value);
});

//adding input to textarea translates eng to morse
document.querySelector("textarea").addEventListener("input", () => {
  document.querySelector("#morseOutput").innerText = encoder(document.querySelector("#englishInput").value);
  //resize output field to fit overflowing paragraph morse
  const outputHeight = document.querySelector("p").scrollHeight;
  if (outputHeight > document.querySelector("textarea").scrollHeight) {
    document.querySelector(".translations-container").style.height = `${outputHeight + 30}px`;
    document.querySelector(".output-field").style.height = `${outputHeight + 30}px`;
  }
});