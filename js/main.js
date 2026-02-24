document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("isOpen");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // WhatsApp quote form
  const form = document.querySelector("#quote");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("q_name").value.trim();
    const dates = document.getElementById("q_dates").value.trim();
    const guests = document.getElementById("q_guests").value.trim();
    const interest = document.getElementById("q_interest").value;

    const msg =
      `Hi Seasonal Explore Maldives,\n` +
      `Name: ${name}\n` +
      `Travel Dates: ${dates}\n` +
      `Guests: ${guests}\n` +
      `Interest: ${interest}\n\n` +
      `Please share available options and final pricing.`;

    const wa = `https://wa.me/9607577658?text=${encodeURIComponent(msg)}`;
    window.open(wa, "_blank");
  });
});
