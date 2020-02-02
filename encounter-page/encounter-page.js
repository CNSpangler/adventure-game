import { getBand, saveBand } from '../makeSaveGetBand.js';
import createEncounterPage from './createEncounterPage.js';
import { encounters } from '../data/encounters.js';
import findById from '../utils/utils.js';
import encounterResult from './encounterResult.js';
import renderUserData from '../common/render-user-data.js';

const params = new URLSearchParams(window.location.search);
const encounterId = params.get('id');
const currentEncounter = findById(encounters, encounterId);

if (!currentEncounter) {
    window.location = '../guitar-map';
}

const form = document.getElementById('choices');
const audio = document.getElementsByTagName('audio');
const result = document.getElementById('result');
const returnLink = document.querySelector('a');
const bandStats = document.getElementById('user-stats');
    
createEncounterPage(currentEncounter);
audio.src = currentEncounter.audio;
    
form.addEventListener('submit', function(event) {
    event.preventDefault();
        
        // get user choice
    const formData = new FormData(form);
    const userChecked = formData.get('choice');
    const userChoice = findById(currentEncounter.choices, userChecked);
        
    const band = getBand('Band Stats');
    console.log(band);

    encounterResult(userChoice, currentEncounter.id, band);
    saveBand(band);

    form.classList.add('hidden');
    result.classList.remove('hidden');
    returnLink.classList.remove('hidden');
    bandStats.classList.remove('hidden');
    result.textContent = userChoice.result;

    renderUserData(band);
});