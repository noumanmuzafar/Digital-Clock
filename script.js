function clock() {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let meridian = document.getElementById("meridian");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12; // This is to get the time in 12-hours and not in hours like 13,14,15
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let amPM = h >= 12 ? "AM" : "PM"; // if i use it above the above-written four lines, it will show "AM", instead of "PM"

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  meridian.innerHTML = amPM;
}

// clock()......This sets the clock in motion, but to keep updating the clock we use "setInterval()" function instead of "clock()"

setInterval(clock, 1000); // 1000 means that in one second the script is run.
