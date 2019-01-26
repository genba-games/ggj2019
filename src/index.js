import Phaser from 'phaser';
import Boot from './scenes/boot';
import Menu from './scenes/menu';
import Pen from './scenes/pen';

const minigames = [];

const config = {
  type: Phaser.AUTO,
  parent: 'play',
  width: 1200,
  height: 900,
  scene: [Boot, Menu, Pen, ...minigames],
};
console.log('Config game');

const game = new Phaser.Game(config);
