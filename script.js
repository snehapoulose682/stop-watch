var msec = 0,
  sec = 0,
  min = 0,
  interval = 0;
timerRunning = false;
count = 0;

function setMSec() {
  count++;
  min = Math.floor(count / 100 / 60);
  sec = Math.floor(count / 100 - min * 60);
  msec = Math.floor(count - sec * 100 - min * 6000);
  document.getElementById("min").innerHTML = loadZero(min);
  document.getElementById("sec").innerHTML = loadZero(sec);
  document.getElementById("msec").innerHTML = loadZero(msec);
}

function startButton() {
  if (!timerRunning) {
    interval = setInterval(setMSec, 10);
    timerRunning = true;
  }
}

function stopButton() {
  clearInterval(interval);
  timerOn = 0;
}
function loadZero(time) {
  if (time <= 9) {
    return "0" + time;
  } else {
    return time;
  }
}
