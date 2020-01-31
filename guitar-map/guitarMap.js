import encounters from '../data/encounters.js';
import createEncounterLink from './createEncounterLink.js';
import createCompletedEncounter from './createCompletedEncounter.js';
import hasCompletedAll from './hasCompletedAll';
import isFlat from './isFlat';

// get user data from local storage - CHECK
// show user data in stats box

// list of quests = guitar picks - CHECK
    // turn each into a query param link - CHECK
    // generate new page for specific quest

// for each quest page
    // show header with user stats
    // pull encounter scenario from metadata
    // pull choices from metadata
        // each choice a radio button

// alert(`Don't fret! You'll find our rock idols soon. Click on any of the guitar picks to choose your first adventure. Keep an eye on your stats in the top right corner. If you run out of HP (Hair Points), you lose. Collect as many PC (Power Chords) as you can! Good luck!`);

const parsedBandObject = JSON.parse(localStorage.getItem('Band Stats'));
console.log(parsedBandObject);


let link;

const pickOne = document.getElementById('pick-one');
pickOne.appendChild(link);


// check localStorage to see what questions have been completed
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

    // createEncounterLink(); feed it that same single encounter?
    // take the resulting link (will be in the form of an <a>) and append it to the appropriate guitar pick 