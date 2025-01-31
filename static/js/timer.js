// Set your anniversary date (Year, Month - 1, Day, Hours, Minutes, Seconds)
const anniversaryDate = new Date(2024, 6, 21, 1, 34, 40).getTime(); // Example: February 1, 2023

function updateTimer() {
    const now = new Date().getTime();
    const elapsed = now - anniversaryDate;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML =
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;

    // Update every second
    setTimeout(updateTimer, 1000);
}

// Start the timer when the page loads
updateTimer();
