import Actor from '../actor';
import Enum from 'enumify-js';

export const State = Enum(
  'IDLE',
  'MOVING',
  'SNOOZING',
);

export default class Creature extends Actor {
  constructor (scene, x, y, asset, 
               {energy=100, 
                energy_variance=20,
                speed=200,
                speed_variance=50,} = {}) {
    super(scene, x, y, asset);
    scene.add.existing(this);

    // this.setTintFull(0xff)
    
    this.angle = 0;
    this.radius = 100;
    this.period = 3;
    console.log(this)
  }

  // preUpdate(time, delta) {
  //   super.preUpdate(time, delta);
  //   this.angle += Math.PI*2 * delta / 1000 / this.period;
  //   this.x = 100 + Math.cos(this.angle) * this.radius;
  //   this.y = 250 + Math.sin(this.angle) * this.radius;
  // }
}
