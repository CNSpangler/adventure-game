import { encounters } from '../data/encounters.js';
import createEncounterLink from './createEncounterLink.js';
import createCompletedEncounter from './createCompletedEncounter.js';
import hasCompletedAll from './hasCompletedAll.js';
import isFlat from './isFlat.js';
import { getBand } from '../makeSaveGetBand.js';
import renderUserData from '../common/render-user-data.js';

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