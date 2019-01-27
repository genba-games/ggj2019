import Phaser from 'phaser';
import Creature from '../actors/creatures/creature';
import Red from '../actors/creatures/red';
import background from '../assets/bg.png';
import orange from '../assets/orange400x470.png';
import Orange from '../actors/creatures/orange';
import bunny from '../assets/rabbit280x400.png';
import Bunny from '../actors/creatures/bunny';
import robot from '../assets/robot290x375.png';
import Robot from '../actors/creatures/robot';


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
    const basePanel = this.add.rectangle(0, 450, 300, 900, 0xff);
    const name = this.add.rectangle(0, 70, 270, 100, 0xffff);
    const cuteBar = this.add.rectangle(0, 0, 270, 50, 0xffff66);
    const athleticsBar = this.add.rectangle(0, 100, 270, 50, 0xffff88);
    const inteligenceBar = this.add.rectangle(0, 200, 270, 50, 0xffffaa);

    this.statusBarContainer = this.add.container(0, 200,
        [cuteBar, athleticsBar, inteligenceBar]);
    this.leftMenuContainer = this.add.container(150, 0,
        [basePanel, name, this.statusBarContainer]);

    this.orange = new Orange(this, 750, 450);
    this.bunny = new Bunny(this, 800, 450);
    this.robot = new Robot(this, 777, 200);
  }
}
