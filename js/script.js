const targetDate = new Date("2024-10-10T23:59:59").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function () {
  // Get current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the target date
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"

  document.getElementById("time-day").innerHTML = days;
  document.getElementById("time-hr").innerHTML = hours;
  document.getElementById("time-min").innerHTML = minutes;
  document.getElementById("time-sec").innerHTML = seconds;

  // If the countdown is over, display some message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
