import Creature from './creature';
export default class Orange extends Creature {
  constructor(scene, x, y) {
    const asset = 'orange';
    super(
      scene, x, y, asset, 
      60, 30, 
      120, 30, 
      80, 30,
      0.6, 
      0.2,
    );
    this.setScale(0.3);

    scene.anims.create({
      key: `walk${asset}`,
      frames: scene.anims.generateFrameNumbers(asset, {frames: [1, 3]}),
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
      frames: scene.anims.generateFrameNumbers(asset, {frames: [0, 2]}),
      frameRate: 0,
      repeat: -1,
    });
  }
}
