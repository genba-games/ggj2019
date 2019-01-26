import Actor from './actor';

export default class Creature extends Actor {
  constructor(scene, x, y, asset) {
    super(scene, x, y, asset);

    this.setTintFill(0xff);
  }
}
