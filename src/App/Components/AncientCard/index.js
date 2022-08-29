import BaseComponent from '../BaseComponent';
import './index.scss';

export class AncientCard extends BaseComponent {
  constructor(parentNode, ancientData ) {
    super(parentNode, 'div', 'ancient-card')
    this.data = ancientData;
    // this.el = document.createElement('div');
    // this.el.className = 'ancient-card';
    this.node.style.backgroundImage = `url(${this.data.cardFace})`

  }
}