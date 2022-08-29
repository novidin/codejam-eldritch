import BaseComponent from '../BaseComponent';
import './index.scss';

export class Button extends BaseComponent {
  constructor(parentNode, content,  action) {
    super(parentNode, 'button', 'button', content)
    this.node.onclick = action;
  }
}