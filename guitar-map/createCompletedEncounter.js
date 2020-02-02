export default function createCompletedEncounter(someEncounter) {
    const icon = document.createElement('img');
    icon.classList.add('pick');

    icon.style.top = someEncounter.map.top;
    icon.src = '../assets/transparent-pick-black.png';

    return icon;
}