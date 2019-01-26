import Actor from '../actor';
import Enum from 'enumify-js';

export const State = Enum(
  'IDLE',
  'MOVING',
  'SNOOZING',
);

export default class Creature extends Actor {
  constructor (scene, x, y, asset=0xffffff, 
               energy=100, energy_variance=20, 
               speed=200, speed_variance=50) {
    super(scene, x, y, asset);
    
    this.pos_angle = 0;
    this.energy = energy;
    this.energy_variance = energy_variance;
    this.speed = speed;
    this.speed_variance = speed_variance;

    // TODO Remove this!
    this.setTintFill(asset)

    scene.add.existing(this);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);


  }
}
