export default class ControlPanel extends Phaser.Scene {
  constructor() {
    super({key: 'ControlPanel'});
  }
  create() {
    const basePanel = this.add.rectangle(0, 450, 300, 900, 0xff);
    const name = this.add.rectangle(0, 70, 270, 100, 0xffff);
    const cuteBar = this.add.rectangle(0, 0, 270, 50, 0xffff66);
    const athleticsBar = this.add.rectangle(0, 100, 270, 50, 0xffff88);
    const inteligenceBar = this.add.rectangle(0, 200, 270, 50, 0xffffaa);

    this.statusBarContainer = this.add.container(0, 200,
        [cuteBar, athleticsBar, inteligenceBar]);
    this.leftMenuContainer = this.add.container(150, 0,
        [basePanel, name, this.statusBarContainer]);
  }
}
