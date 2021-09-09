const offset = 1;

export const collideSide = (player, map) => {
  let { x, y, dx, size } = player;

  if (dx > 0) {
    const rightTopTileType = map.getTile(x + size, y);
    const rightBottomTileType = map.getTile(x + size, y + size - offset);
    if (rightTopTileType || rightBottomTileType) {
      player.dx = 0;
      player.x = Math.floor(x / 8) * 8;
    }
  } else if (dx < 0) {
    const leftTopTileType = map.getTile(x, y);
    const leftBottomTileType = map.getTile(x, y + size - offset);
    if (leftTopTileType || leftBottomTileType) {
      player.dx = 0;
      player.x = Math.floor(x / 8) * 8 + 8;
    }
  }
};

export const collideFloor = (player, map) => {
  const { x, y, dy, size } = player;

  if (dy < 0) return false;

  const leftBottomTileType = map.getTile(x, y + size);
  const rightBottomTileType = map.getTile(x + size - offset, y + size);

  if (leftBottomTileType || rightBottomTileType) {
    player.dy = 0;
    player.y = Math.floor(y / 8) * 8;
    player.grounded = true;
    player.airtime = 0;
    return true;
  } else {
    return false;
  }
};

export const collideRoof = (player, map) => {
  const { x, y, size } = player;
  const leftTopTileType = map.getTile(x, y);
  const rightTopTileType = map.getTile(x + size - offset, y);

  if (leftTopTileType || rightTopTileType) {
    player.dy = 0;
    player.y = Math.floor((y - size / 2) / 8) * 8 + 8 + size / 2;
    player.jumpHoldTime = 0;
  }
};
