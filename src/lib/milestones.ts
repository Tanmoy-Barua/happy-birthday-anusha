export type Milestone = {
  id: number;
  title: string;
  wish: string;
  photos: string[];
};

export const UNLOCK_INTERVAL_MS = 60 * 60 * 1000;
export const MILESTONE_START_KEY = "ladu-milestone-start";

export const milestones: Milestone[] = [
  {
    id: 1,
    title: "Sunlit days",
    wish: "I wish your ordinary Tuesdays feel this bright — palm trees, a little gold in the air, and you walking through the world like it was made to hold you.",
    photos: ["/milestones/01.jpg", "/milestones/07.jpg"],
  },
  {
    id: 2,
    title: "Sky on fire",
    wish: "I wish every hard day ends the way this sky does: slowly, warmly, with you still here, still glowing.",
    photos: ["/milestones/02.jpg", "/milestones/06.jpg"],
  },
  {
    id: 3,
    title: "Close enough to hear you laugh",
    wish: "I wish the distance never wins. Even through a screen, Ladu, I want your laugh to find me first.",
    photos: ["/milestones/03.jpg", "/milestones/05.jpg"],
  },
  {
    id: 4,
    title: "Little bites of joy",
    wish: "I wish your year is full of small delicious minutes — chopsticks, mischief, and the kind of hunger that is really just happiness.",
    photos: ["/milestones/04.jpg"],
  },
  {
    id: 5,
    title: "The road at dusk",
    wish: "I wish you never rush past your own life. Stop in the pink light. You look like a wish the sky already answered.",
    photos: ["/milestones/08.jpg"],
  },
  {
    id: 6,
    title: "Winter, still warm",
    wish: "I wish even the coldest places feel like home when you are in them — mountains, snow, and that quiet smile I would follow anywhere.",
    photos: ["/milestones/09.jpg", "/milestones/10.jpg"],
  },
  {
    id: 7,
    title: "Hands in the air",
    wish: "I wish this year gives you more reasons to throw your head back and laugh like the mountain is cheering with you.",
    photos: ["/milestones/11.jpg"],
  },
  {
    id: 8,
    title: "A path just for you",
    wish: "I wish the way forward is this clear: blue sky, wooden boards, and enough time to walk it without fear.",
    photos: ["/milestones/12.jpg"],
  },
  {
    id: 9,
    title: "A table for two",
    wish: "I wish we keep getting to sit down to a full plate and a full heart — slow dinners, warm light, and you across from me.",
    photos: ["/milestones/13.jpg"],
  },
  {
    id: 10,
    title: "Roses, and you",
    wish: "I wish you always know this: you are the garden and the bouquet. Loved in the sun, loved in the snow, loved with flowers in your hands, Anusha.",
    photos: ["/milestones/14.jpg", "/milestones/15.jpg"],
  },
];
