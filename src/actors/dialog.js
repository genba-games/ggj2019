export default class Dialog {
  constructor(scene) {
    this.dialogBox = scene.add.rectangle(500, 500, 700, 100, 0xff);
    this.textObject = scene.make.text({
      x: 180,
      y: 470,
      text: '',
      // origin: { x: 0.5, y: 0.5 },
      style: {
        font: 'bold 14px Arial',
        fill: 'white',
        wordWrap: { width: 640, useAdvancedWrap: true }
      }
    });
    this.delay = 20
  }

  start(conversation) {
    console.log(conversation);
    this.conversation = conversation || this.conversation;
    if(Array.isArray(this.conversation) || Array.length){
      let interaction = this.conversation.shift();
      console.log(interaction);
      let delay = interaction.delay ? interaction.delay : this.delay
      this.textObject.text=''
      this.printLetter(interaction.text,delay);
    }
  }
  printLetter(text, delay = this.delay, index = 0) {
    this.textObject.text += text[index];
    const newIndex = index + 1;
    if (this.skip) {
      this.skip != this.skip;
      this.textObject.text = text;
    }
    if (text.length == newIndex) {
      console.log('message end')
      setTimeout(()=>{this.start()},1000);
    }
    if (newIndex < text.length) {
      setTimeout(() => {
        this.printLetter(text, delay,newIndex);
      }, delay);
    }
  }

  update() {

  }
}
