const runRight = (enemy) => {
  enemy.holdLeft = false;
  enemy.holdRight = true;
};

const runLeft = (enemy) => {
  enemy.holdLeft = true;
  enemy.holdRight = false;
};

const laps = (enemy) => {
  if (!enemy.holdLeft && !enemy.holdRight) enemy.holdRight = true;
  if (enemy.x < 8 * 2) runRight(enemy);
  if (enemy.x > 8 * 36) runLeft(enemy);
};

const jumpToLedges = (freq, enemy, map) => {
  if (enemy.jumpTimer > 0) {
    enemy.jumpTimer -= 1;
  } else {
    const jumpTarget = map.getTile(
      enemy.x + 3 * 8 * enemy.facing,
      enemy.y - 2 * 8
    );
    enemy.jumpTimer = jumpTarget && Math.random() < freq ? 30 : 0;
  }
};

const shootOnSight = (enemy, player) => {
  if (Math.abs(player.y - enemy.y) < 20) {
    runTowardsObject(enemy, player);
  }
  return shootInRange({ enemy, player });
};

const runTowardsObject = (enemy, object) => {
  if (object.x - enemy.x > 0) {
    runRight(enemy);
  } else {
    runLeft(enemy);
  }
};

const jumpTowardsObject = (enemy, object, map) => {
  if (object.y < enemy.y) {
    jumpToLedges(1, enemy, map);
  }
};

const shootInRange = ({ enemy, player }) => Math.abs(player.y - enemy.y) < 20;

export const aggro = ({ enemy, player, map }) => {
  runTowardsObject(enemy, player);
  jumpTowardsObject(enemy, player, map);
  const space = shootInRange({ enemy, player });
  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
    space,
  };
  return [buttons, false];
};

export const runAndGun = ({ enemy, map, player }) => {
  laps(enemy);
  jumpToLedges(0.1, enemy, map);
  const space = shootOnSight(enemy, player);
  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
    space,
  };
  return [buttons, false];
};

export const pacifist = ({ enemy, map }) => {
  laps(enemy);
  jumpToLedges(0.1, enemy, map);

  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
  };

  return [buttons, false];
};

export const idiot = ({ enemy }) => {
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

export const sentinel = ({ enemy, player }) => {
  const space = Math.abs(enemy.x - player.x) < 30;
  const left = enemy.x > player.x;
  const right = enemy.x < player.x;
  const immobile = true;
  return [
    {
      left,
      right,
      up: false,
      space,
    },
    immobile,
  ];
};
