import { makeBand, saveBand } from './makeSaveGetBand.js';

const audio = new Audio('/assets/rock-guitar-power-chords_75bpm_C_major');

const form = document.getElementById('band-name');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    audio.play();
    const formData = new FormData(form);
    const band = makeBand(formData);

    saveBand(band);

    window.location = 'guitar-map/index.html';
    
    alert(`Don't fret! You'll find our rock idols soon. Click on any of the guitar picks to choose your first adventure. Keep an eye on your stats in the top right corner. If you run out of HP (Hair Points), you lose. Collect as many PC (Power Chords) as you can! Good luck!`);
});