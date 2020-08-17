document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementById("dropdown-expand");
  var dropdownExpantion = document.getElementById("dropdown-expantion");
  var dropdownVisible = document.getElementById("dropdown-visible");

  dropdown.addEventListener("click", function () {
    if (dropdownExpantion.classList.contains("dropdown__expantion-hidden")) {
      dropdownVisible.classList.add("dropdown__visible-expanded");
      dropdownExpantion.classList.replace(
        "dropdown__expantion-hidden",
        "dropdown__expantion"
      );
    } else if (dropdownExpantion.classList.contains("dropdown__expantion")) {
      dropdownVisible.classList.remove("dropdown__visible-expanded");
      dropdownExpantion.classList.replace(
        "dropdown__expantion",
        "dropdown__expantion-hidden"
      );
    }
  });

  dropdownExpantion.addEventListener("click", function (t) {
    if ("dropdown__expantion__item__menu__button" == t.target.classList) {
      var item = t.target.id.split("_")[0];
      var symbol = t.target.id.split("_")[1];
    }

    if (symbol == "plus") {
      document.getElementById(item + "_counter").innerHTML =
        parseInt(document.getElementById(item + "_counter").innerHTML) + 1;
    } else if (symbol == "minus") {
      if (parseInt(document.getElementById(item + "_counter").innerHTML) > 0) {
        document.getElementById(item + "_counter").innerHTML =
          parseInt(document.getElementById(item + "_counter").innerHTML) - 1;
      }
    }
    newSummary();
  });
});

function newSummary() {
  var message = "";
  var bedroom = parseInt(document.getElementById("bedroom_counter").innerHTML);
  var bed = parseInt(document.getElementById("bed_counter").innerHTML);
  var bathroom = parseInt(
    document.getElementById("bathroom_counter").innerHTML
  );

  if (bedroom == 0 && bed == 0 && bathroom == 0) {
    document.getElementsByClassName("dropdown__visible__summary")[0].innerHTML =
      "Количество комнат";
  } else {
    if (bedroom > 0) {
      if (bedroom == 1) {
        message = message + bedroom + " спальня";
      } else if (bedroom > 1 && bedroom < 5) {
        message = message + bedroom + " спальни";
      } else {
        message = message + bedroom + " спален";
      }
    }
    if (bed > 0) {
      if (message != "") {
        message = message + ", ";
      }
      if (bed == 1) {
        message = message + bed + " кровать";
      } else if (bed > 1 && bed < 5) {
        message = message + bed + " кровати";
      } else {
        message = message + bed + " кроватей";
      }
    }
    if (bathroom > 0) {
      if (message != "") {
        message = message + ", ";
      }
      if (bathroom == 1) {
        message = message + bathroom + " ванная комната";
      } else if (bathroom > 1 && bathroom < 5) {
        message = message + bathroom + " ванных комнаты";
      } else {
        message = message + bathroom + " ванных комнат";
      }
    }

    document.getElementsByClassName(
      "dropdown__visible__summary"
    )[0].innerHTML = message;
  }
}
