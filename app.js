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
});