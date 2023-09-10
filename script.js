  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeekElement = document.getElementById("dayOfWeek");
  const currentTimeElement = document.getElementById("currentTime");

  // Function to update the current day of the week and time
  function updateDateTime() {
      const now = new Date();
      const dayOfWeek = daysOfWeek[now.getUTCDay()];
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes();

      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

      dayOfWeekElement.textContent = dayOfWeek;
      currentTimeElement.textContent = timeString;
  }

  // Initial call to update the date and time
  updateDateTime();

  // Update date and time every minute
  setInterval(updateDateTime, 60000);