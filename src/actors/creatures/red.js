import Creature from './creature'

export default class Red extends Creature {
  constructor(scene, x, y) {
    super(scene, x, y, 0xff0000, 500, 0, 600, 0);
  }
}
