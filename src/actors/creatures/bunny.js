import Creature from './creature';
export default class Bunny extends Creature {
  constructor(scene, x, y) {
    const asset = 'bunny';
    super(
      scene, x, y, asset, 
      70, 20, 
      200, 50, 
      110, 30,
      0.9, 
      0.07,
    );
    this.setScale(0.4);
    
    scene.anims.create({
      key: `walk${this.asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [1, 2]}),
      frameRate: 3,
      repeat: -1,
    });
    scene.anims.create({
      key: `idle${this.asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [0]}),
      frameRate: 0,
      repeat: -1,
    });
    scene.anims.create({
      key: `eat${this.asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [0, 3]}),
      frameRate: 0,
      repeat: -1,
    });
    scene.anims.create({
      key: `sleep${this.asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [4]}),
      frameRate: 0,
      repeat: -1,
    });
  }
}
