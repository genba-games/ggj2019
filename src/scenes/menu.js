import Dialog from '../actors/dialog';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({key: 'Menu'});
  }

  create() {
    this.mainDialog = new Dialog(this);
    this.mainDialog.write([{text: 'Whats worse?'},
      {text: 'Wet socks or sweaty clothes?'}]);
    localStorage.setItem('creature', 'previousCreatureData');
    if (localStorage.getItem('creature')) {
      console.log('Menu calling pen');
      this.scene.start('Pen');
    }
  }
  update() {
    this.mainDialog.update();
  }
}
