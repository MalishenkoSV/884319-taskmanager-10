
// main.js
import {createMenuSiteTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createCardTaskTemplate} from './components/task.js';
import {createFormEditTaskTemplate} from './components/form-edit.js';
import {createButtonLoadMoreTemplate} from './components/load-more-button.js';
import {createBordTemplate} from './components/board.js';
import {generateTasks} from './mock/cards-tasks.js';
import {generateFilters} from './mock/filter.js';

const TASK_NUMBER = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

//  функция вставки
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
// вставка
const placeMainElement = document.querySelector(`.main`);
const placeMainControl = placeMainElement.querySelector(`.main__control`);
render(placeMainControl, createMenuSiteTemplate());

const filters = generateFilters();
render(placeMainElement, createFilterTemplate(filters));
render(placeMainElement, createBordTemplate(TASK_NUMBER));

const placeTaskListElement = placeMainElement.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_NUMBER);
render(placeTaskListElement, createFormEditTaskTemplate(tasks[0]));
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTasksCount).forEach((task) => render(placeTaskListElement, createCardTaskTemplate(task), `beforeend`));

const boardElement = placeMainElement.querySelector(`.board`);
render(boardElement, createButtonLoadMoreTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => render(placeTaskListElement, createCardTaskTemplate(task), `beforeend`));
  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
