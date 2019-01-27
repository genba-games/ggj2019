import Actor from '../actor';
import Enum from 'enumify-js';

export const State = Enum(
  'IDLE',
  'MOVE',
  'SLEEP',
  'EAT',
);

export default class Creature extends Actor {
  constructor (scene, x, y, asset=0xffffff, 
               energyBase=50, energyVariance=25, 
               movementBase=80, movementVariance=30,
               speedBase=80, speedVariance=20,
               moveChance=0.85, eatChance=0.1) {
    super(scene, x, y, asset);

    this.asset = asset;
    
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
    this.state = State.IDLE;
    this.energy = 0;
    this.setEnergyRate();
    //  State times
    this.idleTime = 100;
    this.moveTime = 100;
    this.eatTime = 800;
    this.sleepTime = 3000;
    //  State chances
    this.stateChances = [
      moveChance + eatChance,
      moveChance,
      0, 
    ];

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
    console.log('IDLE', this);
    this.state = State.IDLE;
    this.energy = 0;
    this.setEnergyRate();
    this.setAnimation();
  }

  setStateMove() {
    console.log('MOVING');
    this.state = State.MOVE;
    this.setSpeedRate();
    this.setAnimation();
    this.moveStartTween();
  }

  setStateEat() {
    console.log('EATING');
    this.state = State.EAT;
    this.setAnimation();
    setTimeout(this.setStateIdle.bind(this), this.eatTime);
  }

  setStateSleep() {
    console.log('SLEEPING');
    this.state = State.SLEEP;
    this.setAnimation();
    setTimeout(this.setStateIdle.bind(this), this.sleepTime);
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
    if (x - this.width / 2 < 300) x -= 2 * deltaX;
    else if (x + this.width / 2 > this.scene.width) x -= 2 * deltaX;

    let y = this.y + deltaY;
    if (y - this.height / 2 < 0) y -= 2 * deltaY;
    else if (y + this.height / 2 > this.scene.height) y -= 2 * deltaY;

    this.scene.add.tween({ 
      targets: this,
      x: x,
      y: y,
      ease: 'EaseIn',
      duration: this.moveCalcDuration(),
      onComplete: this.setStateIdle.bind(this),
    });
  }

  setAnimation() {
    if (this.state == State.MOVE) this.anims.play(`walk${this.asset}`, false);
    else if (this.state == State.EAT) this.anims.play(`eat${this.asset}`, false);
    else if (this.state == State.SLEEP) this.anims.play(`sleep${this.asset}`, false);
    else this.anims.play(`idle${this.asset}`, false);
  }

  setNextState() {
    const action = Math.random();
    // Sleep
    if (this.stateChances[0] <= action) this.setStateSleep();
    // Eat
    else if (this.stateChances[1] <= action) this.setStateEat();
    // Move
    else if (this.stateChances[2] <= action) this.setStateMove();
  }

  create() {
    console.log('TEST');
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.state == State.IDLE && this.energy < 100) {
      this.energy += this.energyRate * delta / 1000;
    }
    else if (this.state == State.IDLE && this.energy >= 100) {
      this.setNextState();
    }
  }
}
