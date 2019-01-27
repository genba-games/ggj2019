import Creature from './creature';
export default class Bunny extends Creature {
  constructor(scene, x, y) {
    const asset = 'bunny';
    super(scene, x, y, asset, 70, 20, 120, 30);
    this.setScale(0.4);
    scene.anims.create({
      key: `walk${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [1, 2]}),
      frameRate: 3,
      repeat: -1,
    });
    scene.anims.create({
      key: `idle${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [0]}),
      frameRate: 0,
      repeat: -1,
    });
    scene.anims.create({
      key: `eat${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [0, 3]}),
      frameRate: 0,
      repeat: -1,
    });
    scene.anims.create({
      key: `sleep${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [4]}),
      frameRate: 0,
      repeat: -1,
    });
    this.anims.play(`walk${asset}`, true);
  }
}
