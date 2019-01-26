import Phaser from 'phaser';

export default class Actor extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, asset) {
    super(scene, x, y);

    this.setTexture(asset);
    this.setPosition(x, y);
  }
}
