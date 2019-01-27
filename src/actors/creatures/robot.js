import Creature from './creature';
export default class Robot extends Creature {
  constructor(scene, x, y) {
    const asset = 'robot';
    super(scene, x, y, asset, 70, 20, 120, 30);
    this.setScale(0.4);
    scene.anims.create({
      key: `walk${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [3, 4]}),
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
      frames: scene.anims.generateFrameNumbers(asset, {frames: [0, 2]}),
      frameRate: 0,
      repeat: -1,
    });
    scene.anims.create({
      key: `sleep${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [1]}),
      frameRate: 0,
      repeat: -1,
    });
    this.anims.play(`walk${asset}`, true);
  }
}
