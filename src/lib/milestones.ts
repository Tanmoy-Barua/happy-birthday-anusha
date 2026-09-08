export type Milestone = {
  id: number;
  title: string;
  wish: string;
  photos: string[];
  question: string;
  hint: string;
  answers: string[];
  wrong: string;
};

export const UNLOCK_INTERVAL_MS = 60 * 60 * 1000;
export const MILESTONE_START_KEY = "ladu-milestone-start";
export const OPENED_MILESTONES_KEY = "ladu-opened-milestones";

export const milestones: Milestone[] = [
  {
    id: 1,
    title: "Sunlit days",
    wish: "I wish your ordinary Tuesdays feel this bright — palm trees, a little gold in the air, and you walking through the world like it was made to hold you.",
    photos: ["/milestones/01.jpg", "/milestones/07.jpg"],
    question: "Security check: what does he call you when he is being extra cute?",
    hint: "Sweeter than dessert.",
    answers: ["ladu", "ladoo", "laddu", "my ladu", "ladu"],
    wrong: "Wrong password. The heart refuses anyone who is not Ladu.",
  },
  {
    id: 2,
    title: "Sky on fire",
    wish: "I wish every hard day ends the way this sky does: slowly, warmly, with you still here, still glowing.",
    photos: ["/milestones/02.jpg", "/milestones/06.jpg"],
    question: "If the sunset had to pick a favorite human, who would it choose?",
    hint: "Look in a mirror, queen.",
    answers: ["me", "anusha", "ladu", "myself", "i"],
    wrong: "The sky just rolled its clouds at you. Try again.",
  },
  {
    id: 3,
    title: "Close enough to hear you laugh",
    wish: "I wish the distance never wins. Even through a screen, Ladu, I want your laugh to find me first.",
    photos: ["/milestones/03.jpg", "/milestones/05.jpg"],
    question: "On a video call, who is the main character?",
    hint: "Lake Tahoe shirt energy.",
    answers: ["me", "anusha", "ladu", "myself"],
    wrong: "Nope. Supporting actors do not get this lock.",
  },
  {
    id: 4,
    title: "Little bites of joy",
    wish: "I wish your year is full of small delicious minutes — chopsticks, mischief, and the kind of hunger that is really just happiness.",
    photos: ["/milestones/04.jpg"],
    question: "What tiny food do you attack with chopsticks like a professional?",
    hint: "It spins. It is cute. It is dinner.",
    answers: ["sushi", "kura", "nigiri"],
    wrong: "That is not on the conveyor belt. Try a tastier guess.",
  },
  {
    id: 5,
    title: "The road at dusk",
    wish: "I wish you never rush past your own life. Stop in the pink light. You look like a wish the sky already answered.",
    photos: ["/milestones/08.jpg"],
    question: "When he says “hold the button,” what are you blowing out?",
    hint: "Birthday classic.",
    answers: ["candles", "candle", "the candles"],
    wrong: "Almost. Do not blow the boyfriend. Blow the other thing.",
  },
  {
    id: 6,
    title: "Winter, still warm",
    wish: "I wish even the coldest places feel like home when you are in them — mountains, snow, and that quiet smile I would follow anywhere.",
    photos: ["/milestones/09.jpg", "/milestones/10.jpg"],
    question: "In the snow, what movie-star thing sits on your face?",
    hint: "They are dark. They are dramatic.",
    answers: ["sunglasses", "shades", "glasses"],
    wrong: "Wrong. A scarf is cute. This lock wants the cooler accessory.",
  },
  {
    id: 7,
    title: "Hands in the air",
    wish: "I wish this year gives you more reasons to throw your head back and laugh like the mountain is cheering with you.",
    photos: ["/milestones/11.jpg"],
    question: "Hands in the air: is it yoga, surrender, or victory?",
    hint: "You already won.",
    answers: ["victory", "win", "winning", "celebration", "all"],
    wrong: "The mountain says that is not it. Try a more champion answer.",
  },
  {
    id: 8,
    title: "That laugh on the call",
    wish: "I wish I always get this version of you — the bun, the laugh, the silly shirt, and me in the little window just happy to be there.",
    photos: ["/milestones/12.jpg"],
    question: "On this call, who is laughing like the joke was too good?",
    hint: "It is not the tiny square.",
    answers: ["me", "anusha", "ladu", "myself"],
    wrong: "Wrong window. Zoom in on the girl who is actually having fun.",
  },
  {
    id: 9,
    title: "A table for two",
    wish: "I wish we keep getting to sit down to a full plate and a full heart — slow dinners, warm light, and you across from me.",
    photos: ["/milestones/13.jpg"],
    question: "At dinner, who has the official rights to the last bite?",
    hint: "Obviously not him.",
    answers: ["me", "anusha", "ladu", "i do", "myself"],
    wrong: "Thief detected. Put the last bite back and answer honestly.",
  },
  {
    id: 10,
    title: "Roses, and you",
    wish: "I wish you always know this: you are the garden and the bouquet. Loved in the sun, loved in the snow, loved with flowers in your hands, Anusha.",
    photos: ["/milestones/14.jpg", "/milestones/15.jpg"],
    question: "Final boss: who are all these roses actually for?",
    hint: "Say your name like you mean it.",
    answers: ["me", "anusha", "ladu", "myself"],
    wrong: "The roses just fainted. Try the correct girl.",
  },
];

export function answersMatch(input: string, answers: string[]) {
  const normalized = input
    .toLowerCase()
    .replace(/[^a-z0-9\u0980-\u09ff ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) return false;
  const words = normalized.split(" ");
  return answers.some((answer) => {
    const target = answer.toLowerCase().trim();
    if (normalized === target) return true;
    if (target.length >= 4 && normalized.includes(target)) return true;
    return words.includes(target);
  });
}
