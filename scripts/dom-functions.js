import{ encoder, decoder } from "./translation.js"

//default select radio btn on load
document.querySelector("#english").checked = true;

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

//adding input to textarea translates
document.querySelector("textarea").addEventListener("input", () => {
  const userInputStr = document.querySelector("#userInput").value;
  const outputArea = document.querySelector("#translatedOutput");

  if (document.querySelector("#english").checked) {

    let isValid = /[0-9A-Za-z\s]/.test(userInputStr);

    try {
      outputArea.innerText = encoder(userInputStr);

      if (isValid || userInputStr === "") {
        document.querySelector("#errorMessages").innerText = "";
      };
    } catch (e) {
      document.querySelector("#errorMessages").innerText = e.message;
    };
  };

  if (document.querySelector("#morse").checked) {
    let isValid = /[\.\-\/\s]/.test(userInputStr);

    try {
      outputArea.innerText = decoder(userInputStr);

      if (isValid || userInputStr === "") {
        document.querySelector("#errorMessages").innerText = "";
      };
    } catch (e) {

      document.querySelector("#errorMessages").innerText = e.message;
    };
  }

  resizeOutputField();
});

//checking radio buttons runs the relevant function
document.querySelector("#english").addEventListener("click", () => {
  const userInputStr = document.querySelector("#userInput").value;
  const outputArea = document.querySelector("#translatedOutput");

  let isValid = /[0-9A-Za-z\s]/.test(userInputStr);

  try {
    outputArea.innerText = encoder(userInputStr);

    if (isValid || userInputStr === "") {
      document.querySelector("#errorMessages").innerText = "";
      };
  } catch (e) {
    document.querySelector("#errorMessages").innerText = e.message;
  };

  resizeOutputField();
});

document.querySelector("#morse").addEventListener("click",  () => {
  const userInputStr = document.querySelector("#userInput").value;
  const outputArea = document.querySelector("#translatedOutput");

  let isValid = /[\.\-\/\s]/.test(userInputStr);

  try {
    outputArea.innerText = decoder(userInputStr);
      
    if (isValid || userInputStr === "") {
      document.querySelector("#errorMessages").innerText = "";
      };

  } catch (e) {
    document.querySelector("#errorMessages").innerText = e.message;
  };

  resizeOutputField();
});