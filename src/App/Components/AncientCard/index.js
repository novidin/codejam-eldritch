import './index.scss';

export class AncientCard {
  constructor(ancientData) {
    this.data = ancientData;
    this.el = document.createElement('div');
    this.el.className = 'ancient-card';
    this.el.style.backgroundImage = `url(${this.data.cardFace})`

  }
}