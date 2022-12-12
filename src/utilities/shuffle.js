export const shuffle = () => {
  const assets = [
    { image: "/assets/cartoon-dog.jpg" },
    { image: "/assets/cartoon-turtle.jpg" },
    { image: "/assets/cartoon-cat.jpg" },
    { image: "/assets/cartoon-elephant.jpg" },
    { image: "/assets/cartoon-bear.jpg" },
    { image: "/assets/cartoon-fox.jpg" },
    { image: "/assets/cartoon-rabbit.jpg" },
    { image: "/assets/cartoon-otter.jpg" },
  ];

  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

// export default shuffle;

// function shuffleArray(array) {
//   const allArr = [...array, ...array];
//   for (let i = allArr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [allArr[i], allArr[j]] = [allArr[j], allArr[i]];
//   }
// }

// shuffleArray([
//   { image: "/assets/css.png" },
//   { image: "/assets/html5.png" },
//   { image: "/assets/jquery.png" },
//   { image: "/assets/js.png" },
//   { image: "/assets/next.png" },
//   { image: "/assets/node.png" },
//   { image: "/assets/react.png" },
//   { image: "/assets/ts.png" },
// ]);
