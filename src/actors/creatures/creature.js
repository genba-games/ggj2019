import Actor from '../actor';
import Enum from 'enumify-js';

export const State = Enum(
  'IDLE',
  'MOVING',
  'SNOOZING',
);

export default class Creature extends Actor {
  constructor (scene, x, y, asset=0xffffff, 
               energyBase=50, energyVariance=25, 
               movementBase=80, movementVariance=30,
               speedBase=80, speedVariance=20) {
    super(scene, x, y, asset);

    // TODO Remove this!
    this.setTintFill(asset)
    
    // Creature properties
    //  Energy
    this.energyBase = energyBase;
    this.energyVariance = energyVariance;
    //  Movement
    this.movementBase = movementBase;
    this.movementVariance = movementVariance;
    //  Speed
    this.speedBase = speedBase;
    this.speedVariance = speedVariance;

    // State
    //  State times
    this.idleTime = 100;
    this.moveTime = 100;
    //  Set initial state
    this.setStateIdle();

    scene.add.existing(this);
  }

  calcVariance(base, variance) {
    return base + (-1 + Math.random() * 2) * variance;
  }

  setEnergyRate() {
    this.energyRate = this.calcVariance(this.energyBase, this.energyVariance);
  }

  setSpeedRate() {               
    this.speedRate = this.calcVariance(this.speedBase, this.speedVariance);
  }

  setStateIdle() {
    this.state = State.IDLE;
    this.energy = 0;
    this.setEnergyRate();
  }

  setStateMove() {
    this.state = State.MOVING;
    this.setSpeedRate();
    this.moveStartTween();
  }

  moveCalcDuration() {
    return this.moveTime * this.moveTime / this.speedRate;
  }

  moveStartTween() {
    const angle = Math.random() * Math.PI * 2;
    const distance = this.calcVariance(this.movementBase, this.movementVariance);
    const deltaX = Math.cos(angle) * distance;
    const deltaY = Math.sin(angle) * distance;

    let x = this.x + deltaX;
    if (x - this.width / 2 < 0) x -= 2 * deltaX;
    else if (x + this.width / 2 > this.scene.width) x -= 2 * deltaX;

    let y = this.y + deltaY;
    if (y - this.height / 2 < 0) y -= 2 * deltaY;
    else if (y + this.height / 2 > this.scene.height) y -= 2 * deltaY;

    console.log('Moving to', x, ',', y);

    this.scene.add.tween({ 
      targets: this,
      x: x,
      y: y,
      ease: 'EaseIn',
      duration: this.moveCalcDuration(),
      onComplete: this.setStateIdle.bind(this),
    });
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.state == State.IDLE && this.energy < 100) {
      this.energy += this.energyRate * delta / 1000;
    }
    else if (this.state == State.IDLE && this.energy >= 100) {
      this.setStateMove()
    }
  }
}
