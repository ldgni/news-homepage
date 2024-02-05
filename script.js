// Get the DOM elements
const navigationMenu = document.getElementById("navigation-menu");
const navigationToggle = document.getElementById("navigation-toggle");

// Add event listener to the navigation toggle
navigationToggle.addEventListener("click", () => {
  // Get the current visibility state of the navigation menu
  const visibility = navigationMenu.getAttribute("data-visible");

  // Toggle the visibility of the navigation menu
  if (visibility === "false") {
    navigationMenu.setAttribute("data-visible", "true");
    navigationToggle.setAttribute("aria-expanded", "true");
  } else {
    navigationMenu.setAttribute("data-visible", "false");
    navigationToggle.setAttribute("aria-expanded", "false");
  }
});
