function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}

export default function createEncounterPage(someEncounter) {
    const form = document.getElementById('choices');

    const encounterImage = document.createElement('img');
    encounterImage.src = someEncounter.image;
    form.appendChild(encounterImage);

    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);

    const legend = document.createElement('legend');
    legend.textContent = someEncounter.description;
    fieldset.appendChild(legend);

    for (let i = 0; i < someEncounter.choices.length; i++) {
        const choice = someEncounter.choices[i];
        const renderChoice = createChoice(choice);
        fieldset.appendChild(renderChoice);
    }

    const button = document.createElement('button');
    button.textContent = 'Guitar!';
    button.type = 'radio';
    form.appendChild(button);
}