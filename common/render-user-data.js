export default function renderUserData(someBand) {
    const bandName = document.getElementById('band-name');
    const hairPoints = document.getElementById('hair-points');
    const powerChords = document.getElementById('power-chords');

    bandName.textContent = 'Band Name: ' + someBand.name;
    hairPoints.textContent = 'Hair Points:' + someBand.hp;
    powerChords.textContent = 'Power Chords:' + someBand.pc;
}