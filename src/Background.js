let nearStars = [];
let farStars = [];

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default class Background {
  constructor({ cw, ch }) {
    for (let i = 0; i < 10; i++)
      nearStars.push([Math.random() * cw, Math.random() * ch, Math.random()]);
    for (let i = 0; i < 10; i++)
      farStars.push([Math.random() * cw, Math.random() * ch, Math.random()]);
  }
  draw(drawer) {
    drawer.draw(() => {
      drawer.drawBackground("#112", "#131");
      nearStars.map((star) =>
        drawer.rect({
          rect: [
            mod(
              star[0] - drawer.camera.x / (3 + 3 * star[2]),
              drawer.canvas.width
            ),
            mod(
              star[1] - drawer.camera.y / (3 + 3 * star[2]),
              drawer.canvas.height
            ),
            1,
            1,
          ],
          fillColor: "rgba(255, 255, 255, 0.6)",
          adjusted: false,
        })
      );
      farStars.map((star) =>
        drawer.rect({
          rect: [
            mod(
              star[0] - drawer.camera.x / (7 + 3 * star[2]),
              drawer.canvas.width
            ),
            mod(
              star[1] - drawer.camera.y / (7 + 3 * star[2]),
              drawer.canvas.height
            ),
            1,
            1,
          ],
          fillColor: "rgba(255, 255, 255, 0.3)",
          adjusted: false,
        })
      );
    });
  }
}
