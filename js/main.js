document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#quote");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("q_name").value.trim();
    const dates = document.getElementById("q_dates").value.trim();
    const guests = document.getElementById("q_guests").value.trim();
    const interest = document.getElementById("q_interest").value;

    const msg =
      `Hi Seasonal Explore Maldives,%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Travel Dates: ${encodeURIComponent(dates)}%0A` +
      `Guests: ${encodeURIComponent(guests)}%0A` +
      `Interest: ${encodeURIComponent(interest)}%0A%0A` +
      `Please share available options and final pricing.`;

    const wa = `https://wa.me/9607577658?text=${msg}`;
    window.open(wa, "_blank");
  });
});
