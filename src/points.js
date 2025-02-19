import { isRandomTrue } from "./utils";

// ----------------------------------------------------------------------------
export class Points {
  limit = 22;

  // --------------------------------------------------------------------------
  init() {
    this.points = Array(this.limit)
      .fill()
      .map(() => {
        const x = 3 + Math.floor(rnd(122));
        const y = 3 + Math.floor(rnd(122));
        return new Point({ x, y });
      });
  }

  // --------------------------------------------------------------------------
  update() {
    for (var point of this.points) {
      point.update();
    }
  }

  // --------------------------------------------------------------------------
  draw() {
    for (let i = 0; i < this.points.length - 1; i++) {
      line(
        this.points[i].x,
        this.points[i].y,
        this.points[i + 1].x,
        this.points[i + 1].y,
        i % 14,
      );
    }

    line(
      this.points[0].x,
      this.points[0].y,
      this.points[this.points.length - 1].x,
      this.points[this.points.length - 1].y,
      15,
    );
  }
}

// ----------------------------------------------------------------------------
//                                                                        POINT
class Point {
  // --------------------------------------------------------------------------
  constructor({ x, y }) {
    this.x = x;
    this.y = y;

    const speed = 1 + Math.floor(Math.random() * 2);
    this.xv = isRandomTrue() ? -speed : speed;
    this.yv = isRandomTrue() ? -speed : speed;
  }

  // --------------------------------------------------------------------------
  update() {
    this.x += this.xv;
    this.y += this.yv;

    if (this.x < 2 || this.x > 126) {
      this.xv *= -1;
    }
    if (this.y < 2 || this.y > 126) {
      this.yv *= -1;
    }
  }
}
