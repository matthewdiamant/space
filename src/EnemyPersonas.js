export const idiot = (enemy) => {
  const immobile = false;
  let buttons;
  if (enemy.lifespan % 30 === 0) {
    const left = Math.random() < 0.5;
    buttons = {
      left: left,
      right: !left,
      up: Math.random() < 0.5,
      space: Math.random() < 0.5,
    };
  } else {
    buttons = null;
  }
  return [buttons, immobile];
};

export const sentinel = () => {
  const immobile = true;
  return [
    {
      left: false,
      right: false,
      up: false,
      space: true,
    },
    immobile,
  ];
};
