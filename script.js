// Get the popup element
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Function to show the popup
function showPopup() {
    popup.style.display = "block"; // Show the popup
}

// Function to close the popup
function closePopup() {
    popup.style.display = "none"; // Hide the popup
}

// Set an interval to open the popup every 30 seconds
setInterval(showPopup, 30000); // 30000 milliseconds = 30 seconds

// Close the popup when the user clicks on the close button
closeBtn.onclick = closePopup;

// Close the popup when the user clicks outside of the popup content
window.onclick = function(event) {
    if (event.target === popup) {
        closePopup();
    }
}

// Optionally, show the popup immediately on the first load
setTimeout(showPopup, 0); // Show immediately after loading