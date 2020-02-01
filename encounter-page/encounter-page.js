import { getBand, saveBand } from '../makeSaveGetBand.js';
import createEncounterPage from './createEncounterPage.js';
import { encounters } from '../data/encounters.js';
import findById from '../utils/utils.js';

const band = getBand('Band Stats');

const params = new URLSearchParams(window.location.search);
const encounterId = params.get('id');
const currentEncounter = findById(encounters, encounterId);

// if (!currentEncounter) {
//     window.location = '../guitar-map';
// }

const form = document.getElementById('choices');

createEncounterPage(currentEncounter);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // get user choice
    const formData = new FormData(form);
    const userChecked = formData.get('choice');
    const userChoice = findById(currentEncounter.choices, userChecked);
    console.log('choice object?', userChoice);
});

    // // get user out of local storage
    // const user = getUser();
    // // generate a score and manipulate user state
    // scoreQuest(choice, quest.id, user);
    // // save user
    // saveUser(user);

// const form = document.getElementById('choices');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const userChecked = formData.get('choice');
//     console.log('formData.get choice', userChecked);
    // const userChoice = findById(currentEncounter.choices, userChecked);
    // console.log('userChoice object', userChoice);

    // scoreQuest(userChoice, currentEncounter.id, band);
    // saveBand(band);

    // window.location = '../guitar-map/index.html';
// });

// event listener on form submit 
    // changes window location to map page
    // saves user choice to local storage
    // increments/decrements hp
    // increments/decrements pc





// for the form, add an event listener on submit
    // get formData (new FormData)
    // call the encounter completed in state; redirect to the map
    // use the user selection in the formData to update the DOM and change state
        // set textContent of...what element?
        // increment hp
        // update hp in localStorage (or does this automatically happen?)
        // increment pc
        // update pc in localStorage (or does this automatically happen?)



