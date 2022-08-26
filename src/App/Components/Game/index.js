import BaseComponent from "../BaseComponent";

import './index.scss';

export class GameSet extends BaseComponent {
  constructor(parentNode, cardSet) {
    super(parentNode, 'div', 'game-set')

    this.cardSet = cardSet;
    this.names = {
      firstStage: 'Этап 1',
      secondStage: 'Этап 2',
      thirdStage: 'Этап 3'
    }

    console.log(this.cardSet)
    this.gameStateTable = new BaseComponent(this.node, 'div', 'game-state');
    this.showGameStateTable()

    this.cardBtn = new BaseComponent(this.node, 'div', 'show-card-btn');
    this.card = new BaseComponent(this.node, 'div', 'card');
    this.cardBtn.node.onclick = () => {
      let card;
      Object.keys(this.cardSet).forEach(stage => {
        
        if (this.cardSet[stage].length && !card) {
          card = this.cardSet[stage].pop();
          this.showCard(card);
        }
      })
      if (!(this.cardSet.thirdStage.length)) this.cardBtn.destroy()
      this.showGameStateTable()
    }
  }

  showGameStateTable() {
    if (this.gameStateWrapper) this.gameStateWrapper.destroy();
    this.gameStateWrapper = new BaseComponent(this.gameStateTable.node, 'div', 'game-state-wrapper');
    let active;
    Object.keys(this.cardSet).forEach(stage => {
      const stageWrapper = new BaseComponent(this.gameStateWrapper.node, 'div', 'stage-wrapper');
      if (!(this.cardSet[stage].length)) stageWrapper.node.classList.add('stage-complited');
      stageWrapper.node.classList.remove('stage-active');
      if (this.cardSet[stage].length && !active) {
        stageWrapper.node.classList.add('stage-active');
        active = 1;
      }  
      stageWrapper.node.innerHTML = `
      <h2 class = "stage-name"> ${this.names[stage]} </h2>
      <div class = "game-state-count bg-green">${this.cardSet[stage].filter(el => el.color === 'green').length}</div>
      <div class = "game-state-count bg-brown">${this.cardSet[stage].filter(el => el.color === 'brown').length}</div>
      <div class = "game-state-count bg-blue">${this.cardSet[stage].filter(el => el.color === 'blue').length}</div>
      `
    })
  }

  
  showCard(card) {
    this.card.node.style.backgroundImage = `url('${card.cardFace}')`;
  }

}