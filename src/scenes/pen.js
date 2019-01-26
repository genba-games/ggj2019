import Dialog from '../actors/dialog';
export default class Pen extends Phaser.Scene {
  constructor() {
    super({key: 'Pen'});
  }

  create() {
    const mainDialog = new Dialog(this);
    mainDialog.printLetter('Hola soy el dialog box');
  }

  update() {

  }
}


