import { getBand } from '../makeSaveGetBand.js';
import renderUserData from '../common/render-user-data.js';

const band = getBand();
const resultsText = document.getElementById('results');

renderUserData(band);

if (band.hp === 0) {
    resultsText.textContent = `Oh no! Your hair went flat and now you are totally lame. We appreciate your effort, but you should probably go get a fresh can of Aquanet and try again later.`;
} else if (band.pc < 7) {
    resultsText.textContent = `You look terrible--what happened? I think you may have taken this seriously. At least now you know ${band.pc} power chords! We suggest you jam with those for a while and figure out how to have some fun!`;
} else if (band.pc > 6 && band.pc < 13) {
    resultsText.textContent = `Wow, you found ${band.pc} power chords, and didn't let your hair go totally flat! You play a pretty mean guitar. With a bit more practice, you'll be rocking with the best of them!`;
} else if (band.pc > 13) { 
    `You ROCK! You found ${band.pc} power chords! Yours is the glam. Yours is the glory. Go  forth and rock responsibly.`;
}

localStorage.clear('Band Stats');