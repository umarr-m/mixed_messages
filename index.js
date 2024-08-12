const adjectives = [
    "amazing",
    "wonderful",
    "brilliant",
    "fantastic",
    "incredible"
];

const nouns = [
    "friend",
    "colleague",
    "person",
    "leader",
    "thinker"
];

const phrases = [
    "Keep up the great work!",
    "You make a difference every day!",
    "Your efforts are truly appreciated!",
    "The world needs more people like you!",
    "You're an inspiration to others!"
];

const randomCompliment = () => {
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNouns = nouns[Math.floor(Math.random() * nouns.length)];
    let randomPhrases = phrases[Math.floor(Math.random() * phrases.length)];
    
    return `Youre a ${randomAdjective} ${randomNouns}, ${randomPhrases}.`;
}

console.log(randomCompliment());
