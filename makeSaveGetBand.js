export function makeBand(someData) {
    const band = {
        name: someData.get('name'),
        hp: 3,
        pc: 0,
        completed: {}
    };
    return band;
}

export function saveBand(someBand) {
    const stringyBand = JSON.stringify(someBand);
    localStorage.setItem('Band Stats', stringyBand);
}

export function getBand() {
    const stringyBand = localStorage.getItem('Band Stats');
    if (!stringyBand) return null;
    const band = JSON.parse(stringyBand);
    return band;
}
