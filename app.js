import { makeBand, saveBand } from './makeSaveGetBand.js';

// Header with game name - CHECK
// Instructions/overview of game - CHECK
// Form to collect user name - CHECK
// STRETCH: Choose your axe
// Submit button with event listener to: - CHECK
    // Save user name to local storage (make and save user object) - CHECK
        // name (from form data) - CHECK
        // set power-chords state to 0 - CHECK
        // set hair-bigness to 3 - CHECK
    // Send user to guitar-map page - CHECK
    // STRETCH: guitar riff on submit

const form = document.getElementById('band-name');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const band = makeBand(formData);

    saveBand(band);

    window.location = '/guitar-map/index.html';
});