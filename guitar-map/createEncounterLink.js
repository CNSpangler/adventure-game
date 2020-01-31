export default function createEncounterLink(someEncounter) {
    const link = document.createElement('a');
    link.classList.add('pick');

    const getParams = new URLSearchParams();
    getParams.set('id', someEncounter.id);
    link.href = 'encounter?' + getParams.toString();
    link.href = '../encounter/?id=' + someEncounter.id;

    link.style.top = someEncounter.map.top;
    link.textContent = someEncounter.title;

    return link;
}