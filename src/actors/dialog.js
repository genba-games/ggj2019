export default class Dialog {
  constructor(scene) {
    this.textObject = scene.add.text(100, 100, '');
    this.dialogBox = scene.add.rectangle(1000, 1000, 1000, 300, 0xdddddd);
  }

  printLetter(text, index = 0, delay = 100) {
    this.textObject.text += text[index];
    const newIndex = index + 1;
    if (newIndex < text.length) {
      setTimeout(() => {
        this.printLetter(text, newIndex);
      }, delay);
    }
  }
}
