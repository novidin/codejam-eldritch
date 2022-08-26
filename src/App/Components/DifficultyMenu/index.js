import BaseComponent from '../BaseComponent';
import './index.scss';

export class DifficultyMenu extends BaseComponent {
  constructor(parentNode, content) {
    super(parentNode, 'div', 'difficulty-menu', content)
    
  }
}