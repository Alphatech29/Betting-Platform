// Create a function to display the current time
function displayTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(
      undefined,
      {timeZone: 'Africa/Lagos'}
    );
    document.getElementById("clock").innerHTML = timeString;
  }
  setInterval(displayTime, 1000);
  