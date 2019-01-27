import Questionnaire from '../actors/questionnaire';
export default class Menu extends Phaser.Scene {
  constructor() {
    super({key: 'Menu'});
  }

  create() {
    if (localStorage.getItem('creature')) {
      console.log('Menu calling pen');
      console.log(localStorage.getItem('creature'));
      this.scene.start('Pen');
    }
    const questions = [{
      dialog: [{text: 'Whats worse?'}],
      options: ['Wet socks', 'Sweaty clothes'],
    },
    {
      dialog: [{text: 'What would you prefer?'}],
      options: ['Frozen food', 'Boiling food'],
    },
    {
      dialog: [{text: 'Which would you prefer?'}],
      options: ['A good book', 'Evade taxes'],
    },
    {
      dialog: [{text: 'What would you rather cook?'}],
      options: ['Instant noodles', 'Spaghetti'],
    },
    {
      dialog: [{text: 'What is more pleasent?'}],
      options: ['Apples', 'Oranges'],
    }];
    this.que = new Questionnaire(this, questions);
    this.que.startSurvey();
  }
  update() {
    this.que.update();
  }
}
