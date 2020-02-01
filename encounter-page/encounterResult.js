export default function encounterResult(someChoice, someEncounter, someBand) {
    someBand.hp += someChoice.hp;
    someBand.pc += someChoice.cp;
    someBand.completed[someEncounter] = true;
}