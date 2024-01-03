// auto-resizes textarea height
document.querySelector("textarea").addEventListener("input", e => {
  document.querySelector(".container").style.height = "185px";
  document.querySelector(".output-field").style.height = "185px";
  let scHeight = e.target.scrollHeight;
  document.querySelector(".container").style.height = `${scHeight}px`;
  document.querySelector(".output-field").style.height = `${scHeight}px`;
})