import background from '../assets/bg.png';
import orange from '../assets/orange400x470.png';
import Orange from '../actors/creatures/orange';
import bunny from '../assets/rabbit280x400.png';
import Bunny from '../actors/creatures/bunny';
import robot from '../assets/robot290x375.png';
import Robot from '../actors/creatures/robot';
import ControlPanel from './controlPanel';


export default class Pen extends Phaser.Scene {
  constructor() {
    super({key: 'Pen'});
  }
  preload() {
    this.load.image('background', background);
    this.load.spritesheet('orange', orange, {frameWidth: 400, frameHeight: 470});
    this.load.spritesheet('robot', robot, {frameWidth: 290, frameHeight: 375});
    this.load.spritesheet('bunny', bunny, {frameWidth: 280, frameHeight: 400});
  }
  create() {
    this.add.image(750, 450, 'background');

    this.orange = new Orange(this, 750, 450);
    this.bunny = new Bunny(this, 800, 450);
    this.robot = new Robot(this, 777, 200);

    this.scene.add('ControlPanel', ControlPanel, true, {x: 300, y: 900});
  }
}
