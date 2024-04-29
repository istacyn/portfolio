const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const mobileNav = document.getElementById("mobileNav");
const contentSections = document.querySelectorAll(".section");

// Set the initial state of the mobileNav to hidden
mobileNav.classList.add("hide");

// Function to show the mobile navigation menu and hide sections
function showMobileNav() {
    // Show mobile navigation
    mobileNav.classList.remove("hide");
    mobileNav.classList.add("show");

    // Hide all sections
    contentSections.forEach(contentSection => {
      contentSection.classList.add("hide");
    });

    // Hide the hamburger icon and show the close icon
    hamburgerIcon.classList.add("hide");
    closeIcon.classList.remove("hide");
}

// Function to hide the mobile navigation menu and show sections
function hideMobileNav() {
    // Hide mobile navigation
    mobileNav.classList.remove("show");
    mobileNav.classList.add("hide");

    // Show all sections
    contentSections.forEach(contentSection => {
      contentSection.classList.remove("hide");
    });

    // Show the hamburger icon and hide the close icon
    hamburgerIcon.classList.remove("hide");
    closeIcon.classList.add("hide");
}

// Function to handle clicks on links in mobile navigation menu
function handleMobileNavLinkClick(event) {
  // Prevent default behavior (in this case, following the link immediately)
  event.preventDefault();

  // Get the ID of the target section from the link's href
  const targetId = event.target.getAttribute("href").substring(1);

  // Scroll to the target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
  }

  // Hide the mobile navigation menu
  hideMobileNav();
}

// Add event listeners to links in the mobile navigation menu
const mobileNavLinks = document.querySelectorAll("#mobileNav a");
mobileNavLinks.forEach(link => {
    link.addEventListener("click", handleMobileNavLinkClick);
});

// Add event listener to the hamburger icon
hamburgerIcon.addEventListener("click", showMobileNav);

// Add event listener to the close icon
closeIcon.addEventListener("click", hideMobileNav);