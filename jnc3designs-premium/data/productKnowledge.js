export const productKnowledge = {
  pla: {
    outdoor: false,
    foodSafe: false,
    uvResistant: false,
    strength: 3,
    flexibility: 2,
    difficulty: 1,

    bestFor: [
      "Signs",
      "Decor",
      "Models",
      "Everyday Printing",
    ],

    avoidFor: [
      "High Heat",
      "Outdoor Projects",
    ],
  },

  petg: {
    outdoor: true,
    foodSafe: true,
    uvResistant: false,
    strength: 4,
    flexibility: 3,
    difficulty: 2,

    bestFor: [
      "Functional Parts",
      "Containers",
      "Mechanical Pieces",
    ],

    avoidFor: [
      "Ultra Fine Detail",
    ],
  },

  asa: {
    outdoor: true,
    foodSafe: false,
    uvResistant: true,
    strength: 5,
    flexibility: 3,
    difficulty: 4,

    bestFor: [
      "Outdoor Parts",
      "Automotive",
      "Oilfield",
    ],

    avoidFor: [
      "Beginner Printing",
    ],
  },

  abs: {
    outdoor: false,
    foodSafe: false,
    uvResistant: false,
    strength: 5,
    flexibility: 3,
    difficulty: 4,

    bestFor: [
      "Mechanical Parts",
      "Industrial Components",
    ],

    avoidFor: [
      "Open Printers",
    ],
  },

  "petg-cf": {
    outdoor: true,
    foodSafe: false,
    uvResistant: true,
    strength: 5,
    flexibility: 2,
    difficulty: 4,

    bestFor: [
      "Engineering Parts",
      "Structural Components",
      "Premium Functional Prints",
    ],

    avoidFor: [
      "Decorative Models",
    ],
  },
};
