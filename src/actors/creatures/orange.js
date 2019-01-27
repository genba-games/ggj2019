import Creature from './creature';
export default class Orange extends Creature {
  constructor(scene, x, y) {
    super(scene, x, y, 'orange', 70, 20, 120, 30);
    this.setScale(0.3);
  }
}
