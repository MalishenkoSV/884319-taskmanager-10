
// main.js
import {createMenuSiteTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createCardTaskTemplate} from './components/task.js';
import {createFormEditTaskTemplate} from './components/form-edit.js';
import {createButtonLoadMoreTemplate} from './components/load-more-button.js';
import {createBordTemplate} from './components/board.js';
import {generateTasks} from './mock/cards-tasks.js';
import {generateFilters} from "./mock/filter";

const TASK_NUMBER = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;
const placeMainElement = document.querySelector(`.main`);
const placeMainControl = placeMainElement.querySelector(`.main__control`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
const tasks = generateTasks(TASK_NUMBER);

//  функция вставки
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
// menu
render(placeMainControl, createMenuSiteTemplate());
// filters
const filters = generateFilters(tasks);
render(placeMainElement, createFilterTemplate(filters));
// bord


render(placeMainElement, createBordTemplate());
const placeTaskListElement = placeMainElement.querySelector(`.board__tasks`);
render(placeTaskListElement, createFormEditTaskTemplate(tasks[0]));

const sliceTask = (number) => tasks.slice(number, showingTasksCount).map((task)=>render(placeTaskListElement, createCardTaskTemplate(task)));
sliceTask(1);
const boardElement = placeMainElement.querySelector(`.board`);
render(boardElement, createButtonLoadMoreTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  sliceTask(prevTasksCount);
  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
