// Countdown Timer Logic (09:59)
document.addEventListener('DOMContentLoaded', () => {
  let totalSeconds = 9 * 60 + 59; // 09 minutes and 59 seconds

  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  const countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
      return;
    }

    totalSeconds--;

    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    minutesElement.textContent = mins < 10 ? '0' + mins : mins;
    secondsElement.textContent = secs < 10 ? '0' + secs : secs;
  }, 1000);
});
