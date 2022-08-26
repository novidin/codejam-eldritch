import ancientsData from "../data/ancients";
import difficulties from "../data/difficulties";
import BaseComponent from "./Components/BaseComponent";
import { Button } from "./Components/Button";
import { AncientCard } from "./Components/AncientCard";
import { DifficultyMenu } from "./Components/DifficultyMenu";
import { createCardSet } from "./utils/createCardSet.js";
import { GameSet } from "./Components/Game";
import './index.scss';




export class App {
  constructor() {
    this.state = {}
    this.state.Ancinent = '';
    this.state.GameDifficulty = 'normal';
    this.gameMenu = new BaseComponent(document.body, 'div', 'game-menu', '<h1>Eldritch Horror</h1><h2>Меню</h2>');
    this.gameField = new BaseComponent(document.body, 'div', 'game-field', '')
    //this.createCardSet = createCardSet;
    ancientsData.forEach(el => {
      const ancientCard = new AncientCard(el);
      this.gameMenu.node.appendChild(ancientCard.el)
      ancientCard.el.onclick = () => {
        this.state.Ancinent = ancientCard.data;
        this.createStartBtn();
      }
    })

    //const difficultyMenu = new DifficultyMenu(document.body, 'Выберите сложность')
    this.createDifficultyMenu()
    this.createStartBtn()
    

  }

  createDifficultyMenu() {
    if (this.difficultyMenu) this.difficultyMenu.destroy();
    this.difficultyMenu = new DifficultyMenu(this.gameMenu.node, 'Выберите сложность');
    difficulties.forEach(el => {
      const difficultyBtn = new Button(this.difficultyMenu.node, el.name, () => {
        this.state.GameDifficulty = el.id;
        difficultyBtn.node.classList.add('active-button')
        this.createDifficultyMenu()
      });
      if (el.id === this.state.GameDifficulty) difficultyBtn.node.classList.add('active-button')
    })
  }

  createStartBtn() {
    
    if (!this.state.Ancinent) {
      this.gameField.node.innerHTML = '<h2>Выберите древнего</h2>'
      return
    }
    this.gameField.node.innerHTML = '';
    const startBtn = new Button(this.gameField.node, 'start', () => {
      this.cardSet = createCardSet(this.state);
      const gameSet = new GameSet(this.gameField.node, this.cardSet)
      startBtn.destroy();
    })
  }
  

  // getCountCards(colorCard) {
  //   return this.state.Ancinent.firstStage[colorCard] +this.state.Ancinent.secondStage[colorCard] +this.state.Ancinent.thirdStage[colorCard]
  //}
}

