export const idiot = (enemy) => {
  if (enemy.lifespan % 30 === 0) {
    const left = Math.random() < 0.5;
    return {
      left: left,
      right: !left,
      up: Math.random() < 0.5,
      space: Math.random() < 0.5,
    };
  }
};

export const sentinel = () => {
  return {
    left: false,
    right: false,
    up: false,
    space: true,
  };
};
