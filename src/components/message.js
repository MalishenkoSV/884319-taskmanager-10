import {createElement} from "./../utils.js";

export default class Message {
  constructor() {
    this._element = null;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }

  getTemplate() {
    return (
      `<p class="board__no-tasks">
           Click «ADD NEW TASK» in menu to create your first task
       </p>`
    );
  }
}
