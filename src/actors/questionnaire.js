import Dialog from '../actors/dialog';
export default class Questionnaire {
  constructor(scene, questions) {
    this.questions = questions;
    this.scene = scene;
    this.mainDialog = new Dialog(this.scene, 600, 700);
    this.response = [];
    this.buttons = {};
    this.buttons.left = this.scene.make.text({
      x: 400,
      y: 700,
      text: 'AAAAAAAAA',
      style: {
        font: 'bold 14px Arial',
        fill: 'white',
        wordWrap: {width: 640, useAdvancedWrap: true},
      },
    });
    this.buttons.right = this.scene.make.text({
      x: 600,
      y: 700,
      text: 'AAAAAAAAA',
      style: {
        font: 'bold 14px Arial',
        fill: 'white',
        wordWrap: {width: 640, useAdvancedWrap: true},
      },
    });
    this.buttons.left.alpha = 0;
    this.buttons.right.alpha = 0;
    this.setButtons();
  }
  /*
    object example
    [{
      dialog:[{text: 'Whats worse?'},
      {text: 'Wet socks or sweaty clothes?'}],
      options:['wet socks','sweaty clothes']
    },{...}...]
  */
  startSurvey() {
    if (this.questions.length==0) {
      localStorage.setItem('creature', this.response);
      this.scene.scene.start('Pen');
      return;
    }
    const question = this.questions.shift();
    this.mainDialog.write(question.dialog);
    this.spawnButtons(question.options);
  }

  spawnButtons(options) {
    this.buttons.left.text = options[0];
    this.buttons.right.text = options[1];
    this.buttons.left.alpha = 1;
    this.buttons.right.alpha = 1;
  }

  killButtons(button) {
    console.log('killButton called');
    this.response.push(button.text);
    this.buttons.left.text = '';
    this.buttons.right.text = '';
    this.buttons.left.alpha = 0;
    this.buttons.right.alpha = 0;
    this.mainDialog.disappear();
    this.startSurvey();
  }
  setButtons() {
    this.buttons.left.setInteractive();
    this.buttons.right.setInteractive();
    this.buttons.left.on('pointerup', ()=> this.killButtons(this.buttons.left));
    // eslint-disable-next-line max-len
    this.buttons.right.on('pointerup', ()=> this.killButtons(this.buttons.right));
  }
  update() {
    this.mainDialog.update();
  }
}
