import { getBand } from "../makeSaveGetBand.js";
import { encounters } from '../data/encounters.js';

getBand('Band Stats');

const params = new URLSearchParams(window.location.search);
const currentEncounter = params.get('id');

function createEncounterPage(someEncounter) {
    const form = document.querySelector('form');

    const fieldset = document.createElement('fieldset');
    form.appendChild('fieldset');

    const legend = document.querySelector('legend');
    legend.textContent = someEncounter.description;
}

createEncounterPage(currentEncounter);





// get the data
// get the data for the correct question using queryParam and findById
    // put the encounter description in the div
// For each choice: dynamically render a radio button
    // make a label
    // Make a span
    // use data to set the span's text content to encounter.choice.id
    // make an input of type radio, name "encounter"
    // Append the span to the label
// for the form, add an event listener on submit
    // get formData (new FormData)
    // call the encounter completed in state; redirect to the map
    // use the user selection in the formData to update the DOM and change state
        // set textContent of...what element?
        // increment hp
        // update hp in localStorage (or does this automatically happen?)
        // increment pc
        // update pc in localStorage (or does this automatically happen?)



