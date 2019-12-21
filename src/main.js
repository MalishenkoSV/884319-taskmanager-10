import SiteMenu from './components/site-menu.js';
import Filter from './components/filter.js';
import Task from './components/task.js';
import FormEdit from './components/form-edit.js';
import LoadMoreButton from './components/load-more-button.js';
import Board from './components/board.js';
import Sort from "./components/sorting.js";
import Message from "./components/message.js";
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
render(placeMainControl, menu.getElement(), RenderPosition.BEFOREEND);

const allTaskArchived = dataTasks.every((tasks) => tasks.isArchived);
// filters
const filters = generateFilters(dataTasks);
const filter = new Filter(filters);
const renderBoardFilters = () => {
  render(placeMainElement, filter.getElement(), RenderPosition.BEFOREEND);
};
renderBoardFilters();
// bord
const boardComponent = new Board();
render(placeMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);


const boardContainerSelector = placeMainElement.querySelector(`.board`);
const boardTasks = boardComponent.getElement().querySelector(`.board__tasks`);

const renderTask = (taskMock, colors) => {
  const taskComponent = new Task(taskMock);
  const formEditComponent = new FormEdit(taskMock, colors);
  const buttonEdit = taskComponent.getElement().querySelector(`.card__btn--edit`);
  const editForm = formEditComponent.getElement().querySelector(`form`);
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  const replaceEditToTask = () => {
    boardTasks.replaceChild(taskComponent.getElement(), formEditComponent.getElement());
  };

  const replaceTaskToEdit = () => {
    boardTasks.replaceChild(formEditComponent.getElement(), taskComponent.getElement());
  };

  buttonEdit.addEventListener(`click`, function () {
    document.addEventListener(`keydown`, onEscKeyDown);
    replaceTaskToEdit();
  });
  editForm.addEventListener(`submit`, function () {
    replaceEditToTask();
  });
  render(boardTasks, taskComponent.getElement(), RenderPosition.BEFOREEND);
};
const renderSort = render(boardComponent.getElement(), new Sort().getElement(), RenderPosition.BEFOREBEGIN);
const renderTasksOnBord = (number) => dataTasks.slice(number, showingTasksCount).forEach((task) =>renderTask(task, boardContainerSelector, COLORS));
renderTasksOnBord(0);
const loadMoreButtonComponent = new LoadMoreButton();
render(boardContainerSelector, loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

const renderButton = loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  renderTasksOnBord(prevTasksCount);
  if (showingTasksCount >= dataTasks.length) {
    loadMoreButtonComponent.getElement().remove();
  }
});
const renderMessage = () => {
  const message = new Message();
  render(boardTasks, message.getElement(), RenderPosition.BEFOREEND);
};
if (allTaskArchived) {
  renderMessage(dataTasks);
} else {
  renderSort();
  renderBoardFilters();
  renderTasksOnBord();
  renderButton();
}
