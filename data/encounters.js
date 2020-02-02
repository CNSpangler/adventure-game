const crue = {
    id: 'crue',
    title: 'A Mötley Crüe!',
    map: { top: '19%' },
    image: '../assets/defleppard.jpg',
    icon: '../assets/transparent-pick-pink.png',
    // audio: '',
    // action: '',
    description: `Oh no, a Mötley Crüe bursts out of the forest! Their leader tells you “Handful of grease in my hair feels right, but what I need to get me tight are those…” What do you offer them?`,
    choices: [{
        id: 'girls',
        description: `Girls, girls, girls`,
        result: `The Mötley Crüe invites you to come party with them. They teach you three power chords!`,
        hp: 0,
        pc: 3
    }, {
        id: 'squirrels',
        description: `Squirrels, squirrels, squirrels`,
        result: `The Mötley Crüe is so confused, they don't even bother to mess up your hair. You get away, but don't gain any power chords.`,
        hp: 0,
        pc: 0
    }, {
        id: 'pearls',
        description: `Pearls, pearls, pearls`,
        result: `The Mötley Crüe is pretty sure this is an insult. They mess up your hair and run away.`,
        hp: -1,
        pc: 0
    }],
};

const scorpions = {
    id: 'scorpions',
    title: 'SCORPIONS!',
    map: { top: '26%' },
    image: '../assets/scorpions.jpg',
    icon: '../assets/transparent-pick-green.png',

    // audio: '',
    // action: '',
    description: `Scorpion appears and declares “Here I am.” How do you respond?`,
    choices: [{
        id: 'rock',
        description: `"Rock you like a hurricane."`,
        result: `Scorpions decide to join your band! Glam glory is yours!`,
        hp: 0,
        pc: 3
    }, {
        id: 'who',
        description: `"Who are you? Please explain."`,
        result: `Scorpions politely explain to you that if you have to ask, you'll never know.`,
        hp: -1,
        pc: 0
    }, {
        id: 'insane',
        description: `"You seem like you are insane."`,
        result: `Scorpions laugh. "Good luck with your little band! Here's a power chord to get you started.`,
        hp: 0,
        pc: 1
    }],
};

const halfway = {
    id: 'halfway',
    title: 'Halfway There!',
    map: { top: '33%' },
    image: '../assets/bonjovi.jpg',
    icon: '../assets/transparent-pick-orange.png',

    // audio: '',
    // action: '',
    description: `Whoa! We're halfway there! Whoa:`,
    choices: [{
        id: 'bear',
        description: `Oh shit, it's a bear!`,
        result: `Bon Jovi doesn't believe you until the bear is almost on top of him. He has to scramble to escape, and he drops two power chords!`,
        hp: 0,
        pc: 2
    }, {
        id: 'rare',
        description: `I take my steak rare!`,
        result: `Bon Jovi smirks at you. "I guess that's pretty metal." He gives you one power chord and leaves.`,
        hp: 0,
        pc: 1
    }, {
        id: 'prayer',
        description: `Livin' on a prayer!`,
        result: `You finish out a rockin' duet with Bon Jovi, and he agrees to come back to town with you.`,
        hp: 0,
        pc: 3
    }],
};

const leppard = {
    id: 'leppard',
    title: 'A wild leppard!',
    map: { top: '40%' },
    image: '../assets/defleppard.jpg',
    icon: '../assets/transparent-pick-teal.png',
    // audio: '',
    // action: '',
    description: `A Def Leppard approaches, speaking in riddles: “I’m hot, sticky sweet, from my head to my feet.” What is your answer?`,
    choices: [{
        id: 'yes',
        description: `Yes, you do seem to be.`,
        result: `The Def Leppard rolls its eyes at you and disappears back into the forest.`,
        hp: -1,
        pc: 0
    }, {
        id: 'sugar',
        description: `Pour some sugar on me.`,
        result: `The Def Leppard purrs. "This cat gets it." You win three power chords!`,
        hp: 0,
        pc: 3
    }, {
        id: 'bees',
        description: `Now you're covered in bees!`,
        result: `"What? That's not how the song g-...Aaaaahhhhhh, beeeeeeees!!!" The Def Leppard runs away screaming, dropping two power chords as it escapes.`,
        hp: 0,
        pc: 2
    }],
};

const bonjovi = {
    id: 'bonjovi',
    title: 'By Jove!',
    map: { top: '47%' },
    image: '../assets/bonjovi.jpg',
    icon: '../assets/transparent-pick-yellow.png',
    // audio: '',
    // action: '',
    description: `Oh no, you rocked too hard and a guitar string went flying. Bon Jovi has been shot through the heart, and you’re to blame!`,
    choices: [{
        id: 'blockchain',
        description: `Tell him about the blockchain.`,
        result: `With the last of his strength, Bon Jovi laughs and tells you to take his last remaining power chords, to carry on his legacy.`,
        hp: 0,
        pc: 2
    }, {
        id: 'shame',
        description: `You think that is a real shame.`,
        result: `Bon Jovi will never recover. Bon Jovi will never forgive you.`,
        hp: -1,
        pc: 0
    }, {
        id: 'love',
        description: `You give love a bad name.`,
        result: `Bon Jovi miraculously recovers! He gives you three power chords for your quick thinking.`,
        hp: 0,
        pc: 3
    }],
};

export const encounters = [
    crue,
    scorpions,
    halfway,
    leppard,
    bonjovi
];

export const encountersObject = {

    'crue': {
        id: 'crue',
        title: 'A Mötley Crüe!',
        map: { top: '19%' },
        image: '../assets/defleppard.jpg',
        icon: '../assets/transparent-pick-pink.png',
    // audio: '',
    // action: '',
        description: `Oh no, a Mötley Crüe bursts out of the forest! Their leader tells you “Handful of grease in my hair feels right, but what I need to get me tight are those…” What do you offer them?`,
        choices: [{
            id: 'girls',
            description: `Girls, girls, girls`,
            result: `The Mötley Crüe invites you to come party with them. They teach you three power chords!`,
            hp: 0,
            pc: 3,
        }, {
            id: 'squirrels',
            description: `Squirrels, squirrels, squirrels`,
            result: `The Mötley Crüe is so confused, they don't even bother to mess up your hair. You get away, but don't gain any power chords.`,
            hp: 0,
            pc: 0,
        }, {
            id: 'pearls',
            description: `Pearls, pearls, pearls`,
            result: `The Mötley Crüe is pretty sure this is an insult. They mess up your hair and run away.`,
            hp: -1,
            pc: 0,
        }],
    },

    'scorpions': {
        id: 'scorpions',
        title: 'SCORPIONS!',
        map: { top: '26%' },
        image: '../assets/scorpions.jpg',
        icon: '../assets/transparent-pick-green.png',

    // audio: '',
    // action: '',
        description: `Scorpion appears and declares “Here I am.” How do you respond?`,
        choices: [{
            id: 'rock',
            description: `"Rock you like a hurricane."`,
            result: `Scorpions decide to join your band! Glam glory is yours!`,
            hp: 0,
            pc: 3,
        }, {
            id: 'who',
            description: `"Who are you? Please explain."`,
            result: `Scorpions politely explain to you that if you have to ask, you'll never know.`,
            hp: -1,
            pc: 0,
        }, {
            id: 'insane',
            description: `"You seem like you are insane."`,
            result: `Scorpions laugh. "Good luck with your little band! Here's a power chord to get you started.`,
            hp: 0,
            pc: 1,
        }],
    },

    'halfway': {
        id: 'halfway',
        title: 'Halfway There!',
        map: { top: '33%' },
        image: '../assets/bonjovi.jpg',
        icon: '../assets/transparent-pick-orange.png',

    // audio: '',
    // action: '',
        description: `Whoa! We're halfway there! Whoa:`,
        choices: [{
            id: 'bear',
            description: `Oh shit, it's a bear!`,
            result: `Bon Jovi doesn't believe you until the bear is almost on top of him. He has to scramble to escape, and he drops two power chords!`,
            hp: 0,
            pc: 2,
        }, {
            id: 'rare',
            description: `I take my steak rare!`,
            result: `Bon Jovi smirks at you. "I guess that's pretty metal." He gives you one power chord and leaves.`,
            hp: 0,
            pc: 1,
        }, {
            id: 'prayer',
            description: `Livin' on a prayer!`,
            result: `You finish out a rockin' duet with Bon Jovi, and he agrees to come back to town with you.`,
            hp: 0,
            pc: 3,
        }],
    },

    'leppard': {
        id: 'leppard',
        title: 'A wild leppard!',
        map: { top: '40%' },
        image: '../assets/defleppard.jpg',
        icon: '../assets/transparent-pick-teal.png',
    // audio: '',
    // action: '',
        description: `A Def Leppard approaches, speaking in riddles: “I’m hot, sticky sweet, from my head to my feet.” What is your answer?`,
        choices: [{
            id: 'yes',
            description: `Yes, you do seem to be.`,
            result: `The Def Leppard rolls its eyes at you and disappears back into the forest.`,
            hp: -1,
            pc: 0,
        }, {
            id: 'sugar',
            description: `Pour some sugar on me.`,
            result: `The Def Leppard purrs. "This cat gets it." You win three power chords!`,
            hp: 0,
            pc: 3,
        }, {
            id: 'bees',
            description: `Now you're covered in bees!`,
            result: `"What? That's not how the song g-...Aaaaahhhhhh, beeeeeeees!!!" The Def Leppard runs away screaming, dropping two power chords as it escapes.`,
            hp: 0,
            pc: 2,
        }],
    },

    'bonjovi': {
        id: 'bonjovi',
        title: 'By Jove!',
        map: { top: '47%' },
        image: '../assets/bonjovi.jpg',
        icon: '../assets/transparent-pick-yellow.png',
    // audio: '',
    // action: '',
        description: `Oh no, you rocked too hard and a guitar string went flying. Bon Jovi has been shot through the heart, and you’re to blame!`,
        choices: [{
            id: 'blockchain',
            description: `Tell him about the blockchain.`,
            result: `With the last of his strength, Bon Jovi laughs and tells you to take his last remaining power chords, to carry on his legacy.`,
            hp: 0,
            pc: 2,
        }, {
            id: 'shame',
            description: `You think that is a real shame.`,
            result: `Bon Jovi will never recover. Bon Jovi will never forgive you.`,
            hp: -1,
            pc: 0,
        }, {
            id: 'love',
            description: `You give love a bad name.`,
            result: `Bon Jovi miraculously recovers! He gives you three power chords for your quick thinking.`,
            hp: 0,
            pc: 3,
        }],
    },

};