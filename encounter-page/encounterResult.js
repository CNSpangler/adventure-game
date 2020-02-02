export default function encounterResult(someChoice, someEncounter, someBand) {
    someBand.hp += someChoice.hp;
    someBand.pc += someChoice.pc;
    someBand.completed[someEncounter] = true;
}