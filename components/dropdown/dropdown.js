document.addEventListener("DOMContentLoaded", function (event) {
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
});
