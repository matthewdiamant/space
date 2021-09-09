export const humanoid = (x, y, facing, colors, options = {}) => {
  const { skin, hair, horns, eyes, body } = colors;
  let parts = [];

  let upper = [
    [skin, [1, 3, 5, 3]], // head
    [eyes, [2, 4, 1, 1]], // eye left
    [eyes, [5, 4, 1, 1]], // eye right
  ];
  parts = parts.concat(upper);

  let lower = [
    [body, [1, 7, 3, 1]], // body
    [skin, [1, 7, 1, 1]], // left arm
    [skin, [4, 7, 1, 1]], // right arm
  ];

  if (!options.bodyless) {
    parts = parts.concat(lower);
  }

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

  const mult = options.huge ? 12 : options.big ? 2 : 1;
  // prettier-ignore
  parts = parts.map(([c, r]) => ({
    c,
    r: [facing === 1 ? x + (r[0] * mult) : 8 * mult - ((r[0] + r[2]) * mult) + x, y + r[1] * mult, r[2] * mult, r[3] * mult],
  }));

  return parts;
};
