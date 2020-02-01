import { encounters } from '../data/encounters.js';
export default function hasCompletedAll(someBand) {
    if (someBand.completed === encounters) {
        return true;
    } return false;
}