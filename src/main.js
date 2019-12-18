import SiteMenu from './components/site-menu.js';
import Filter from './components/filter.js';
import Task from './components/task.js';
import FormEdit from './components/form-edit.js';
import LoadMoreButton from './components/load-more-button.js';
import Board from './components/board.js';
import {generateTasks} from './mock/cards-tasks.js';
import {generateFilters} from './mock/filter.js';
import {render, RenderPosition} from './utils.js';
import {COLORS} from './const';

const TASK_NUMBER = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;
const placeMainElement = document.querySelector(`.main`);
const placeMainControl = placeMainElement.querySelector(`.main__control`);
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

const dataTasks = generateTasks(TASK_NUMBER);

// menu
const menu = new SiteMenu();
render(placeMainControl, menu.getElement(), RenderPosition.BEFOREBEGIN);

// filters
const filters = generateFilters(dataTasks);
const filter = new Filter(filters);
render(placeMainElement, filter.getElement(), RenderPosition.BEFOREBEGIN);
// bord
const boardComponent = new Board();
render(placeMainElement, boardComponent.getElement(), RenderPosition.BEFOREBEGIN);


const boardContainerSelector = placeMainElement.querySelector(`.board`);
const boardTasks = boardComponent.getElement().querySelector(`.board__tasks`);

const renderTask = (taskMock, colors) => {
  const taskComponent = new Task(taskMock);
  const formEditComponent = new FormEdit(taskMock, colors);
  const buttonFormEdit = taskComponent.getElement().querySelector(`.card__btn--edit`);
  const editForm = formEditComponent.getElement().querySelector(`form`);

  buttonFormEdit.addEventListener(`click`, function () {
    boardTasks.replaceChild(formEditComponent.getElement(), taskComponent.getElement());
  });
  editForm.addEventListener(`click`, function () {
    boardTasks.replaceChild(taskComponent.getElement(), formEditComponent.getElement());
  });
  render(boardTasks, taskComponent.getElement(), RenderPosition.BEFOREBEGIN);
};
const renderTasksOnBord = (number) => dataTasks.slice(number, showingTasksCount).map((task) =>renderTask(task, boardContainerSelector, COLORS));
renderTasksOnBord(1);
const loadMoreButtonComponent = new LoadMoreButton();
render(boardContainerSelector, loadMoreButtonComponent.getElement(), RenderPosition.BEFOREBEGIN);

loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  renderTasksOnBord(prevTasksCount);
  if (showingTasksCount >= dataTasks.length) {
    loadMoreButtonComponent.getElement().remove();
  }
});
