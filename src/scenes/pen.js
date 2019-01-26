import Phaser from 'phaser';
import Dialog from '../actors/dialog';
import Creature from '../actors/creatures/creature';
import Red from '../actors/creatures/red';

export default class Pen extends Phaser.Scene {
  constructor() {
    super({key: 'Pen'});
  }

  create() {
    const mainDialog = new Dialog(this);
    mainDialog.printLetter('Hola soy el dialog box');
    this.creature = new Creature(this, 100, 100, 'ecksdee');
    this.red = new Creature(this, 200, 200, 'asdf');
    console.log(this);
  }
}
