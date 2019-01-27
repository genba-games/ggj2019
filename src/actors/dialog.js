export default class Dialog {
  constructor(scene, rx=500, ry=500) {
    this.scene = scene;

    this.dialogBox = scene.add.rectangle(rx, ry, 700, 100, 0xff);
    this.textObject = scene.make.text({
      x: 280,
      y: 670,
      text: '',
      style: {
        font: 'bold 14px Arial',
        fill: 'white',
        wordWrap: {width: 640, useAdvancedWrap: true},
      },
    });
    this.dialogBox.alpha = 0;
    this.textObject.alpha = 0;
    this.wordDelay = 20;
    this.phraseDelay = 2000;
    const keys = this.scene.input.keyboard.addKey('SPACE');
    this.scene.input.keyboard.on('keyup_SPACE', () => {
      this.skip = true;
    });
  }

  write(conversation) {
    this.conversation = conversation || this.conversation;
    if (Array.isArray(this.conversation) && this.conversation.length) {
      // make box Appear
      this.appear = true;

      const interaction = this.conversation.shift();
      const delay = interaction.delay ? interaction.delay : this.wordDelay;
      this.textObject.text = '';
      this.printLetter(interaction.text, delay);
    } else {
    }
  }
  printLetter(text, delay = this.wordDelay, index = 0) {
    this.textObject.text += text[index];
    let newIndex = index + 1;
    if (this.skip) {
      this.skip = false;
      this.textObject.text = text;
      newIndex = text.length;
    }
    if (text.length == newIndex) {
      setTimeout(() => {
        this.write();
      }, this.phraseDelay);
    }
    if (newIndex < text.length) {
      setTimeout(() => {
        this.printLetter(text, delay, newIndex);
      }, delay);
    }
  }
  update() {
    if (this.appear && this.textObject.alpha <= 1) {
      this.dialogBox.alpha += 0.1;
      this.textObject.alpha += 0.1;
    } else if (!this.appear && this.textObject.alpha >= 0) {
      this.dialogBox.alpha -= 0.1;
      this.textObject.alpha -= 0.1;
    }
  }
  disappear() {
    // make box disappear
    this.appear = false;
    // clear
    this.textObject.text = '';
  }
}
