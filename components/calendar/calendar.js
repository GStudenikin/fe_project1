const date = new Date();
const todayDate = date.getDate();
const todayMonth = date.getMonth();
const todayYear = date.getFullYear();
const calendar = document.querySelector(".calendar");

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function amountDays(month, year) {
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
      break;
    case 1:
      if (year % 4 == 0) {
        return 29;
      } else {
        return 28;
      }
      break;
  }
}

function prevMonthDays(year, month) {
  let days = document.querySelector(".calendar__days-list");
  let firstDay = new Date(year, month, 1);
  for (let i = 1; i <= (firstDay.getDay() + 6) % 7; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("calendar__days-list__day-other");
    if (month == 0) {
      var amount_days_prev = 31;
    } else {
      var amount_days_prev = amountDays(month - 1, year);
    }
    console.log(month + " " + amount_days_prev + " " + firstDay.getDay());
    day_element.textContent =
      amount_days_prev - (((firstDay.getDay() + 6) % 7) - i);
    days.appendChild(day_element);
  }
}

function nextMonthDays(month, year) {
  let amount_days = amountDays(month, year);
  let days = document.querySelector(".calendar__days-list");
  let lastDay = new Date(year, month, amount_days);
  if (lastDay.getDay() > 0) {
    let d = lastDay.getDay();
    let i = 1;
    while (d % 7 != 0) {
      const day_element = document.createElement("div");
      day_element.classList.add("calendar__days-list__day-other");
      day_element.textContent = i;
      days.appendChild(day_element);
      d++;
      i++;
    }
  }
}

function buildMonth(month, year) {
  let amount_days = amountDays(month, year);
  let days = document.querySelector(".calendar__days-list");
  days.innerHTML = "";

  prevMonthDays(year, month);

  for (let i = 1; i <= amount_days; i++) {
    const day_element = document.createElement("div");
    if (i == todayDate && month == todayMonth) {
      day_element.classList.add("calendar__days-list__day-current");
    } else {
      day_element.classList.add("calendar__days-list__day");
    }
    day_element.textContent = i;
    days.appendChild(day_element);
  }

  nextMonthDays(month, year);
}

document.addEventListener("DOMContentLoaded", function () {
  //get current day attribute (day, month, year)
  var month = todayMonth;
  var year = todayYear;
  var dayInput = null;

  document.querySelector(".calendar__month__current").innerHTML =
    monthNames[month] + " " + year;
  buildMonth(month, year);

  calendar.addEventListener("click", function (t) {
    if ("calendar__days-list__day" == t.target.classList) {
      console.log(typeof dayInput);
      if (dayInput != null) {
        dayInput.classList.remove("calendar__days-list__day-selected");
        dayInput.classList.add("calendar__days-list__day");
      }
      dayInput = t.target;
      t.target.classList.remove("calendar__days-list__day");
      t.target.classList.add("calendar__days-list__day-selected");
      t.target.nextSibling.classList.remove("calendar__days-list__day");
    }

    if ("calendar__month__btn" == t.target.classList) {
      if (t.target.id == "next-month") {
        month = (month + 1) % 12;
        if (month == 0) {
          year++;
        }
        document.getElementsByClassName(
          "calendar__month__current"
        )[0].innerHTML = monthNames[month] + " " + year;
        buildMonth(month, year);
      } else if (t.target.id == "prev-month") {
        month = (month - 1 + 12) % 12;
        if (month == 11) {
          year--;
        }
        document.getElementsByClassName(
          "calendar__month__current"
        )[0].innerHTML = monthNames[month] + " " + year;
        buildMonth(month, year);
      }
    }
  });
});
