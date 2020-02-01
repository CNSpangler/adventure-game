export default function hasCompletedAll(encounters, someBand) {
    for (let i = 0; i < encounters.length; i++) {
        const encounter = encounters[i];
        if (!someBand.completed[encounter.id]) {
            return false;
        }
    }
    return true;
}