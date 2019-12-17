import SiteMenuComponent from './components/site-menu.js';
import Filter from './components/filter.js';
import Task from './components/task.js';
import FormEdit from './components/form-edit.js';
import LoadMoreButton from './components/load-more-button.js';
import Board from './components/board.js';
import {generateTasks} from './mock/cards-tasks.js';
import {generateFilters} from './mock/filter.js';
import {render, RenderPosition} from './utils.js';

const TASK_NUMBER = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;
const placeMainElement = document.querySelector(`.main`);
const placeMainControl = placeMainElement.querySelector(`.main__control`);

const renderTask = (task) => {
  const taskComponent = new Task(task);
  const formEditComponent = new FormEdit(task);

  const buttonFormEdit = taskComponent.getElement().querySelector(`.card__btn--edit`);
  buttonFormEdit.addEventListener(`click`, function () {
    taskListElement.replaceChild(formEditComponent.getElement(), taskComponent.getElement());
  });

  const editForm = formEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    taskListElement.replaceChild(taskComponent.getElement(), formEditComponent.getElement());
  });

  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREBEGIN);
};


// menu
render(placeMainControl, new SiteMenuComponent().getElement(), RenderPosition.BEFOREBEGIN);
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
const tasks = generateTasks(TASK_NUMBER);

const filters = generateFilters(tasks);
render(placeMainElement, new Filter(filters).getElement(), RenderPosition.BEFOREBEGIN);

// bord
const boardComponent = new Board();
render(placeMainElement, boardComponent.getElement(), RenderPosition.BEFOREBEGIN);

const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);

const renderTasksOnBord = (number) => tasks.slice(number, showingTasksCount).map((task) => {
  renderTask(task);
});
renderTasksOnBord(0);
const boardElement = placeMainElement.querySelector(`.board`);
const loadMoreButtonComponent = new LoadMoreButton();
render(boardElement, loadMoreButtonComponent.getElement(), RenderPosition.BEFOREBEGIN);

loadMoreButtonComponent.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  renderTask(prevTasksCount, RenderPosition.BEFOREBEGIN);
  if (showingTasksCount >= tasks.length) {
    loadMoreButtonComponent.remove();
  }
});
