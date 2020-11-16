const projects = [
  {
    imageSrc: require("../images/githubConfetti.jpg"),
    title: "Github Confetti",
    link:
      "https://chrome.google.com/webstore/detail/github-confetti/dkdgopcaioggfmpkljgmgnjhmblldcpb",
    description:
      "A chrome extension bringing joy to Github checkboxes in the form of confetti.",
    badges: [
      { badge: "Javascript", color: "#F7DF1E" },
      { badge: "Web Extension", color: "#0D9D58" },
    ],
  },
  {
    imageSrc: require("../images/tictactoe.png"),
    title: "Tic Tac Toe",
    link: "https://alicehendicott.github.io/tic-tac-toe/",
    description:
      "A fun and simple multiplayer game to explore real time reading and writing to a database. ",
    badges: [
      { badge: "React", color: "#61DBFB" },
      { badge: "Firebase", color: "#FFCB2B" },
    ],
  },
  {
    imageSrc: require("../images/csschallenges.png"),
    title: "CSS Challenges",
    link: "https://codepen.io/collection/DzyZqK",
    description:
      "Trying my hand at pure CSS challenges. Anything from a plant to beautiful animations.",
    badges: [{ badge: "CSS", color: "#2965F1" }],
  },
];

export default projects;
