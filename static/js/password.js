let modalShown = false; // Flag to prevent multiple triggers

window.addEventListener('scroll', function() {
    // If the modal has already been shown, do nothing
    if (modalShown) return;

    // Get the scroll position and the height of the document
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Log the values to see if the calculation is correct
    console.log("Scroll Position:", scrollPosition);
    console.log("Document Height:", documentHeight);
    console.log("Window Height:", windowHeight);

    // Check if the user has scrolled past 50% of the page
    if (scrollPosition > (documentHeight - windowHeight) / 2) {
        // Show the modal if not already shown
        var myModal = new bootstrap.Modal(document.getElementById('scrollModal'));
        myModal.show();

        modalShown = true; // Set the flag to true to prevent further modal triggering
    }
});