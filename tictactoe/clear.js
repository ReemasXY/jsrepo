const clear = document.getElementsByClassName("clear");
const welcome = document.getElementById("welcome");
const container = document.getElementById("container");
Array.from(clear).forEach((a) => {
  const nodisplay = document.getElementsByClassName("nodisplay");
  a.addEventListener("click", () => {
    Array.from(nodisplay).forEach((no) => {
      no.style.display = "none";
    });
    welcome.style.display = "block";
    container.style.display = "flex";
  });
});
