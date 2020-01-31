export default function createEncounterLink(someEncounter) {
    const aTag = document.createElement('a');
    
    const getParams = new URLSearchParams();
    getParams.set('id', someEncounter.id);
    // aTag.href = 'encounter?' + getParams.toString();
    aTag.href = '../encounter-page/?id=' + someEncounter.id;
    
    const icon = document.createElement('img');
    icon.classList.add('pick');

    icon.style.top = someEncounter.map.top;
    icon.src = someEncounter.icon;

    aTag.appendChild(icon);

    return aTag;
}