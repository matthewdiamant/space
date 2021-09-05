export const pacifist = ({ enemy, map }) => {
  if (!enemy.holdLeft && !enemy.holdRight) enemy.holdRight = true;

  if (enemy.x < 8 * 2) {
    enemy.holdLeft = false;
    enemy.holdRight = true;
  }

  if (enemy.x > 8 * 36) {
    enemy.holdLeft = true;
    enemy.holdRight = false;
  }

  if (enemy.jumpTimer > 0) {
    enemy.jumpTimer -= 1;
  } else {
    const jumpTarget = map.getTile(
      enemy.x + 3 * 8 * enemy.facing,
      enemy.y - 2 * 8
    );
    enemy.jumpTimer = jumpTarget && Math.random() < 0.1 ? 30 : 0;
  }

  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
  };

  return [buttons, false];
};

export const idiot = (enemy) => {
  const immobile = false;
  let buttons;
  if (enemy.lifespan % 30 === 0) {
    const left = Math.random() < 0.5;
    buttons = {
      left: left,
      right: !left,
      up: Math.random() < 0.5,
      space: Math.random() < 0.7,
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
