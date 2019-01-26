export default class Menu extends Phaser.Scene {
    constructor(){
        super({key:'Menu'})
    }
    create() {
        console.log("menu calling pen")
        this.scene.start('Pen')

    }

}