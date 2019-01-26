export default class Pen extends Phaser.Scene {
    constructor(){
        super({key:'Pen'})
    }
    create() {
        this.text=""
        this.dialog = this.add.text(100, 100, this.text);
        console.log(this.text)
        console.log(this.dialog)
        console.log(this.time)
        this.printLetter(this.dialog,"Hola soy el dialog box")
    }
    update(){
        
    }
    printLetter(textObject,text,index=0,delay=100){
        textObject.text+=text[index];
        const newIndex = index + 1;
        if (newIndex < text.length) {
            setTimeout(() => { this.printLetter(textObject,text, newIndex); }, delay);
    } else {
    //   this.typingOff();
    }
    }
}