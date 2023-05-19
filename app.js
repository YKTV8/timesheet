// Function to generate the calendar for the current month
function generateCalendar() {
  const calendar = document.getElementById("calendar");
  const currentMonth = document.getElementById("currentMonth");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  // Set the current month and year
  currentMonth.innerHTML = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(now);

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate the table headers for the days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let headerRow = "<tr>";
  for (let i = 0; i < daysOfWeek.length; i++) {
    headerRow += "<th>" + daysOfWeek[i] + "</th>";
  }
  headerRow += "</tr>";
  calendar.innerHTML = headerRow;

  // Generate the calendar grid
  let date = new Date(year, month, 1);
  let row = "<tr>";
  let dayOfWeek = date.getDay();

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < dayOfWeek; i++) {
    row += "<td></td>";
  }

  // Generate the cells for each day in the month
  for (let i = 1; i <= daysInMonth; i++) {
    row += "<td>" + i + "</td>";

    if (dayOfWeek === 6) {
      calendar.innerHTML += row + "</tr>";
      row = "<tr>";
    }

    date.setDate(date.getDate() + 1);
    dayOfWeek = date.getDay();
  }

  // Add empty cells for any remaining days in the last week
  if (dayOfWeek !== 0) {
    for (let i = dayOfWeek; i < 7; i++) {
      row += "<td></td>";
    }
  }

  calendar.innerHTML += row + "</tr>";
}

// Function to log the current time of day
function logTime() {
  const now = new Date();
  console.log("Current time: " + now.toLocaleTimeString());
}

// Call the generateCalendar function when the page loads
window.onload = generateCalendar;

// Attach a click event listener to the calendar to log the time
document.getElementById("calendar").addEventListener("click", logTime);