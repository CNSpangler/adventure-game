import { getBand, saveBand } from '../makeSaveGetBand.js';
import createEncounterPage from './createEncounterPage.js';
import { encounters } from '../data/encounters.js';
import findById from '../utils/utils.js';
import encounterResult from './encounterResult.js';

const params = new URLSearchParams(window.location.search);
const encounterId = params.get('id');
const currentEncounter = findById(encounters, encounterId);

if (!currentEncounter) {
    window.location = '../guitar-map';
}

const form = document.getElementById('choices');
const result = document.getElementById('result');
const returnLink = document.querySelector('a');
    
createEncounterPage(currentEncounter);
    
form.addEventListener('submit', function(event) {
    event.preventDefault();
        
        // get user choice
    const formData = new FormData(form);
    const userChecked = formData.get('choice');
    const userChoice = findById(currentEncounter.choices, userChecked);
        
    const band = getBand('Band Stats');

    encounterResult(userChoice, currentEncounter, band);
    saveBand(band);

    form.classList.add('hidden');
    result.classList.remove('hidden');
    returnLink.classList.remove('hidden');
    result.textContent = userChoice.result;
});