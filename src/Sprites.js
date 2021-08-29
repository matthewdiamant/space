export const humanoid = (x, y, facing, colors) => {
  const { skin, hair, horns, eyes, body } = colors;
  let parts = [
    [skin, [1, 3, 5, 3]], // head
    [eyes, [2, 4, 1, 1]], // eye left
    [eyes, [5, 4, 1, 1]], // eye right
    [body, [1, 7, 3, 1]], // body
    [skin, [1, 7, 1, 1]], // left arm
    [skin, [4, 7, 1, 1]], // right arm
  ];

  if (hair)
    parts = parts.concat([
      [hair, [2, 1, 4, 1]], // hair top
      [hair, [1, 2, 6, 1]], // hair bottom
    ]);

  if (horns)
    parts = parts.concat([
      [horns, [1, 2, 1, 1]], // horn left
      [horns, [5, 2, 1, 1]], // horn right
    ]);

  parts = parts.map(([c, r]) => ({
    c,
    r: [facing === 1 ? x + r[0] : 8 - (r[0] + r[2]) + x, y + r[1], r[2], r[3]],
  }));

  return parts;
};
