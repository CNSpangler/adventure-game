export default function makeBand(someData) {
    const band = {
        name: someData.get('name'),
        hp: 3,
        pc: 0,
        completed: {}
    };
    return band;
}