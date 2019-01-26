import Creature from './creature'

export default class Red extends Creature {
  constructor(scene, x, y) {
    stats = {
      energy: 500,
      speed: 600,
    }

    this.setTintFill(0xff0000);

    super(scene, x, y, stats);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    // this.angle += Math.PI*2 * elapsed / 3;
    // this.x = 600 + Math.cos(this.angle);
    // this.x += 10;
  }
}
