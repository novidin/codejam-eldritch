import ancientsData from "../data/ancients";
import difficulties from "../data/difficulties";
import BaseComponent from "./Components/BaseComponent";
import { Button } from "./Components/Button";
import { AncientCard } from "./Components/AncientCard";
//import { DifficultyMenu } from "./Components/DifficultyMenu";
import { createCardSet } from "./utils/createCardSet.js";
import { GameSet } from "./Components/Game";
import './index.scss';




export class App {
  constructor() {
    this.state = {}
    this.state.Ancinent = '';
    this.state.GameDifficulty = 'normal';
    this.gameMenu = new BaseComponent(document.body, 'div', 'game-menu', '<h1>Eldritch Horror</h1>');
    this.gameField = new BaseComponent(document.body, 'div', 'game-field', '')
    this.ancientsMenu = new BaseComponent(this.gameMenu.node, 'div', 'ancients-menu', '<h2>Выберите карту древнего</h2>')
    this.difficultyMenu = new BaseComponent(this.gameMenu.node, 'div', 'difficulty-menu', '<h2>Выберите сложность</h2>')
    this.createAncientsMenu()
    this.createDifficultyMenu()
    this.createStartBtn()
  }

  createAncientsMenu() {
    if (this.ancientsWrapper) this.ancientsWrapper.destroy()
    this.ancientsWrapper = new BaseComponent(this.ancientsMenu.node, 'div', 'ancients-wrapper', '');
    ancientsData.forEach(el => {
      const ancientCard = new AncientCard(this.ancientsWrapper.node, el);
      ancientCard.node.onclick = () => {
        this.state.Ancinent = ancientCard.data;
        ancientCard.node.classList.add('ancient-card_active');
        this.createStartBtn();
        this.createAncientsMenu();
      }
      if (ancientCard.data.id === this.state.Ancinent.id) ancientCard.node.classList.add('ancient-card_active');
    })

  }

  createDifficultyMenu() {
    if (this.difficultiesWrapper) this.difficultiesWrapper.destroy();
    this.difficultiesWrapper = new BaseComponent(this.difficultyMenu.node, 'div', 'difficulties-wrapper', '');
    difficulties.forEach(el => {
      const difficultyBtn = new Button(this.difficultiesWrapper.node, el.name, () => {
        this.state.GameDifficulty = el.id;
        difficultyBtn.node.classList.add('active-button')
        this.createStartBtn();
        this.createDifficultyMenu()
      });
      if (el.id === this.state.GameDifficulty) difficultyBtn.node.classList.add('active-button')
    })
  }

  createStartBtn() {
    
    if (!this.state.Ancinent) {
      this.gameField.node.innerHTML = '<h2>Для начала игры выберите карту древнего</h2>'
      return
    }
    this.gameField.node.innerHTML = '';
    const startBtn = new Button(this.gameField.node, 'Замешать колоду', () => {
      this.cardSet = createCardSet(this.state);
      const gameSet = new GameSet(this.gameField.node, this.cardSet)
      startBtn.destroy();
    })
  }
  
}

