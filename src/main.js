import SiteMenu from './components/site-menu.js';
import Filter from './components/filter.js';
import Task from './components/task.js';
import FormEdit from './components/form-edit.js';
import LoadMoreButton from './components/load-more-button.js';
import Board from './components/board.js';
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
    replaceTaskToEdit();
  });
  editForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    document.addEventListener(`keydown`, onEscKeyDown);
    replaceEditToTask();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  render(boardTasks, taskComponent.getElement(), RenderPosition.BEFORE_BEGIN);
};
// menu
const menu = new SiteMenu();
render(placeMainControl, menu.getElement(), RenderPosition.BEFORE_BEGIN);

const allTaskArchived = dataTasks.every((tasks) => tasks.isArchived);
// filters
const filters = generateFilters(dataTasks);
const filter = new Filter(filters);
const renderBoardFilters = () => {
  render(placeMainElement, filter.getElement(), RenderPosition.BEFORE_BEGIN);
};
renderBoardFilters();
// bord
const boardComponent = new Board();
const renderBoard = () => {
  render(placeMainElement, boardComponent.getElement(), RenderPosition.BEFORE_BEGIN);
};
renderBoard();
const boardContainerSelector = placeMainElement.querySelector(`.board`);
const boardTasks = boardComponent.getElement().querySelector(`.board__tasks`);

const renderTasksOnBord = (number) => dataTasks.slice(number, showingTasksCount).forEach((task) =>renderTask(task, boardContainerSelector, COLORS));
renderTasksOnBord(0);
const loadMoreButtonComponent = new LoadMoreButton();
render(boardContainerSelector, loadMoreButtonComponent.getElement(), RenderPosition.BEFORE_BEGIN);

const renderButton = () => {
  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
    renderTasksOnBord(prevTasksCount);
    if (showingTasksCount >= dataTasks.length) {
      loadMoreButtonComponent.getElement().remove();
    }
  });
};
const renderMessage = () => {
  const message = new Message();
  render(boardTasks, message.getElement(), RenderPosition.BEFORE_END);
};
if (allTaskArchived) {
  renderMessage(dataTasks);
} else {
  renderTasksOnBord();
  renderButton();
}
