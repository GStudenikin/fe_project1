import Cleave from "cleave.js";

document.addEventListener("DOMContentLoaded", () => {
  var cleave = new Cleave(".date-field__input", {
    date: true,
    datePattern: ["d", "m", "Y"],
    delimiter: ".",
  });
});
