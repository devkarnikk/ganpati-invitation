
const enterButton = document.getElementById("enterButton");
const invitationSection = document.getElementById("invitationSection");
const calendarButton = document.getElementById("calendarButton");

enterButton.addEventListener("click", () => {
  invitationSection.scrollIntoView({
    behavior: "smooth"
  });
});

calendarButton.addEventListener("click", () => {
  const eventTitle = "Ganpati Darshan & Aarti";
  const eventDetails = "Join us for Ganpati Darshan and Aarti.";
  const eventLocation = "Your Address, Mumbai";

  const startDate = "20260826T133000Z";
  const endDate = "20260826T153000Z";

  const calendarUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(eventTitle)}` +
    `&dates=${startDate}/${endDate}` +
    `&details=${encodeURIComponent(eventDetails)}` +
    `&location=${encodeURIComponent(eventLocation)}`;

  window.open(calendarUrl, "_blank");
});