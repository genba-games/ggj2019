import Phaser from 'phaser';
import Dialog from '../actors/dialog';
import Creature from '../actors/creatures/creature';
import Red from '../actors/creatures/red';

export default class Pen extends Phaser.Scene {
  constructor() {
    super({key: 'Pen'});
  }

  create() {
    // this.creature = new Creature(this, 0, 0);
    this.creature = new Creature(this, 100, 100);
    // this.creature = new Creature(this, 1100, 100);
    // this.creature = new Creature(this, 1100, 800);
    // this.creature = new Creature(this, 100, 800);
    // this.red = new Red(this, 200, 200);
    console.log(this);
  }
}
