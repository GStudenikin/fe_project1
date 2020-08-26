import Cleave from "cleave.js";

var today = new Date();

document.addEventListener("DOMContentLoaded", () => {
  var cleave = new Cleave(".date-field__input", {
    date: true,
    datePattern: ["d", "m", "Y"],
    delimiter: ".",
    dateMax:
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),
  });
});
