
// main.js
import {createMenuSiteTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createCardTaskTemplate} from './components/task.js';
import {createFormEditTaskTemplate} from './components/form-edit.js';
import {createButtonLoadMoreTemplate} from './components/load-more-button.js';
import {createBordTemplate} from './components/board.js';

const TASK_NUMBER = 3;

//  функция вставки
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
// вставка
const placeMainElement = document.querySelector(`.main`);
const placeMainControl = placeMainElement.querySelector(`.main__control`);

render(placeMainControl, createMenuSiteTemplate());
render(placeMainElement, createFilterTemplate());
render(placeMainElement, createBordTemplate());

const placeTaskListElement = placeMainElement.querySelector(`.board__tasks`);
render(placeTaskListElement, createFormEditTaskTemplate());

const getMarkup = () => new Array(TASK_NUMBER).fill(createCardTaskTemplate()).join(``);
render(placeTaskListElement, getMarkup());
const bordElement = placeMainElement.querySelector(`.board`);
render(bordElement, createButtonLoadMoreTemplate());

