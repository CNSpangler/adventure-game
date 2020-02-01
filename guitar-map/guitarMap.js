import { encounters } from '../data/encounters.js';
import createEncounterLink from './createEncounterLink.js';
import createCompletedEncounter from './createCompletedEncounter.js';
// import hasCompletedAll from './hasCompletedAll';
// import isFlat from './isFlat.js';
import { getBand } from '../makeSaveGetBand.js';

// show user data in stats box

// alert(`Don't fret! You'll find our rock idols soon. Click on any of the guitar picks to choose your first adventure. Keep an eye on your stats in the top right corner. If you run out of HP (Hair Points), you lose. Collect as many PC (Power Chords) as you can! Good luck!`);

const band = getBand();

// if (isFlat(band) || hasCompletedAll(encounters, band)) {
//     window.location('../results');
// }

const nav = document.getElementById('guitar');

encounters.forEach(encounter => {
    let encounterOption = null;
    if (band.completed[encounter.id]) {
        encounterOption = createCompletedEncounter(encounter);
    } else {
        encounterOption = createEncounterLink(encounter);
    }
    nav.appendChild(encounterOption);
});

// check localStorage to see what questions have been completed
    // first, make completed events go into an array that you can check
// if there are no questions left to answer...
    // redirect to results page
// if there are any questions left to answer...
// get a pick location from DOM
// loop through the REMAINING encounters array
    //get a single encounter
    // make a div for the encounter
        //create div(?)
        // add textContent to it
        // make an a tag for it 
        // UNLESS it has already been completed (check localStorage); if so, make a span (why?)
            // add the href to the a tag with query params for the question