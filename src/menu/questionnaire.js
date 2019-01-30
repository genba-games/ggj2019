import Dialog from './dialog';
export default class Questionnaire extends Phaser.GameObjects.GameObject {
  constructor(scene, questions) {
    super(scene, 'questionnaire');
    this.questions = questions;
    this.scene = scene;
    this.mainDialog = new Dialog(this.scene, 600, 700);
    this.responses = [];
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
      this.pickCreature();
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
    this.responses.push(button.text);
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
  pickCreature() {
    // Sorry for this
    const creatures = {
      bunny: 0,
      robot: 0,
      orange: 0,
      ghost: 0,
    };
    if (this.responses[0] == 'Wet socks') {
      creatures.bunny +=1;
      creatures.orange+=1;
    } else if (this.responses[0] == 'Sweaty clothes') {
      creatures.robot +=1;
      creatures.ghost+=1;
    }
    if (this.responses[1] == 'Frozen food') {
      creatures.robot+=1;
      creatures.orange+=1;
    }
    if (this.responses[2] == 'A good book') {
      creatures.orange+=1;
      creatures.bunny+=1;
    } else if (this.responses[2] == 'Evade taxes') {
      creatures.robot+=2;
    }
    if (this.responses[3] == 'Instant noodles') {
      creatures.ghost+=1;
    }
    if (this.responses[4] == 'Apples') {
      creatures.bunny+=1;
      creatures.robot+=1;
      creatures.ghost+=1;
    } else if (this.responses[4]=='Oranges') {
      creatures.orange +=2;
    }
    const values = Object.values(creatures);
    const i = values.indexOf(Math.max(...values));
    const names = Object.keys(creatures);
    const creaturePicked = names[i];
    localStorage.setItem('creature', creaturePicked);
  }
  update() {
    this.mainDialog.update();
  }
}
