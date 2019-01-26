import Dialog from '../actors/dialog';
import Creature from '../actors/creature';

export default class Pen extends Phaser.Scene {
  constructor() {
    super({key: 'Pen'});
  }

  create() {
    const mainDialog = new Dialog(this);
    mainDialog.printLetter('Hola soy el dialog box');
    this.creature = new Creature(this, 100, 100, 'ecksdee');
    this.add.existing(this.creature);
  }

  update() {

  }
}
