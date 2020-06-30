document.addEventListener("DOMContentLoaded", function (event) {
  var like = document.getElementById("like_id");

  like.addEventListener("click", function () {
    if (like.classList.contains("like__button")) {
      like.classList.replace("like__button", "like__button__clicked");
      var counter =
        parseInt(document.getElementById("like_id_counter").innerHTML) + 1;
      document.getElementById("like_id_counter").innerHTML = counter;
    } else if (like.classList.contains("like__button__clicked")) {
      like.classList.replace("like__button__clicked", "like__button");
      var counter =
        parseInt(document.getElementById("like_id_counter").innerHTML) - 1;
      document.getElementById("like_id_counter").innerHTML = counter;
    }
  });
});
