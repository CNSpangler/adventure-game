import { encounters } from '../data/encounters.js';
import createEncounterLink from './createEncounterLink.js';
import createCompletedEncounter from './createCompletedEncounter.js';
import hasCompletedAll from './hasCompletedAll.js';
import isFlat from './isFlat.js';
import { getBand } from '../makeSaveGetBand.js';
import renderUserData from '../common/render-user-data.js';

// alert(`Don't fret! You'll find our rock idols soon. Click on any of the guitar picks to choose your first adventure. Keep an eye on your stats in the top right corner. If you run out of HP (Hair Points), you lose. Collect as many PC (Power Chords) as you can! Good luck!`);

const band = getBand();
renderUserData(band);

if (isFlat(band) || hasCompletedAll(encounters, band)) {
    window.location = '../results';
}

const nav = document.getElementById('guitar');

for (let i = 0; i < encounters.length; i++) {
    const encounter = encounters[i];
    let encounterDisplay = null;

    if (band.completed[encounter.id]) {
        encounterDisplay = createCompletedEncounter(encounter);
    } else {
        encounterDisplay = createEncounterLink(encounter);
    }
    nav.appendChild(encounterDisplay);
}