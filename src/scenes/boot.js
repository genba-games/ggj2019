export default class Boot extends Phaser.Scene {
    constructor(){
        super({key:'Boot'})
    }
    create() {
        console.log("Boot calling menu");

        this.scene.start('Menu');
    }
}