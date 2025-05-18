// Select the toggle button and the content section
const toggleButton = document.getElementById("toggleBtn");
const contentSection = document.getElementById("content");

// Add an event listener to the button
toggleButton.addEventListener("click", () => {
    // Check if content is currently visible
    if (contentSection.style.display === "none" || contentSection.style.display === "") {
        contentSection.style.display = "block"; // Show the section
        toggleButton.textContent = "Hide Content"; // Update button text
    } else {
        contentSection.style.display = "none"; // Hide the section
        toggleButton.textContent = "Show Content"; // Update button text
    }
});
