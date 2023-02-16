const themeButton = document.querySelector(".theme-button");
const body = document.querySelector("body");

themeButton.addEventListener("click", function() {
  const currentBodyColor = getComputedStyle(body).backgroundColor;
  const currentFontColor = getComputedStyle(body).color;

  if (currentBodyColor === "rgb(26, 26, 27)") {
    body.style.backgroundColor = "#dae0e6";
    body.style.color = "rgb(0, 0, 0)";
  } else {
    body.style.backgroundColor = "#1a1a1b";
    body.style.color = "rgb(255, 255, 255)";
  }
});
