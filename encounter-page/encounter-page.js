import { getBand } from '../makeSaveGetBand.js';
import { encounters } from '../data/encounters.js';
import findById from '../utils/utils.js';

getBand('Band Stats');

// returns id as a string
const params = new URLSearchParams(window.location.search);
const encounterId = params.get('id');

let currentEncounter = findById(encounters, encounterId);
console.log(currentEncounter);

function createEncounterPage(someEncounter) {
    const form = document.querySelector('form');
    
    const encounterImage = document.createElement('img');
    encounterImage.src = currentEncounter.image;
    form.appendChild(encounterImage);

    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);

    const legend = document.createElement('legend');
    legend.textContent = someEncounter.description;
    fieldset.appendChild(legend);

    const radioOneLabel = document.createElement('label');
    const radioTwoLabel = document.createElement('label');
    const radioThreeLabel = document.createElement('label');
    fieldset.append(radioOneLabel, radioTwoLabel, radioThreeLabel);

    const radioOneSpan = document.createElement('span');
    radioOneSpan.textContent = someEncounter.choices[0].description;
    const radioOneInput = document.createElement('input');
    radioOneInput.type = 'radio';
    radioOneInput.name = 'choice';
    radioOneInput.value = 'optionOne';
    radioOneLabel.append(radioOneInput, radioOneSpan);

    const radioTwoSpan = document.createElement('span');
    radioTwoSpan.textContent = someEncounter.choices[1].description;
    const radioTwoInput = document.createElement('input');
    radioTwoInput.type = 'radio';
    radioTwoInput.name = 'choice';
    radioTwoInput.value = 'optionTwo';
    radioTwoLabel.append(radioTwoInput, radioTwoSpan);

    const radioThreeSpan = document.createElement('span');
    radioThreeSpan.textContent = someEncounter.choices[2].description;
    const radioThreeInput = document.createElement('input');
    radioThreeInput.type = 'radio';
    radioThreeInput.name = 'choice';
    radioThreeInput.value = 'optionThree';
    radioThreeLabel.append(radioThreeInput, radioThreeSpan);

    const button = document.createElement('button');
    button.textContent = 'Guitar!';
    button.type = 'radio';
    form.appendChild(button);
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



