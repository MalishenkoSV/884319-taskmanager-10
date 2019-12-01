/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: createBordTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBordTemplate", function() { return createBordTemplate; });
// board.js
const createBordTemplate = () => {
  return (
    `<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks">

  </div>
</section>`);
};


/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: createFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
// filter.js
const createFilterMakeup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    ` <input type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    <label for="filter__${name}" class="filter__label">${name}
      <span class="filter__${name}-count">${count}</span>
    </label>`
  );
};
const createFilterTemplate = (filters) => {
  const filtersMakeup = filters.map((it, i) => createFilterMakeup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
       ${filtersMakeup}
     </section>`
  );
};


/***/ }),

/***/ "./src/components/form-edit.js":
/*!*************************************!*\
  !*** ./src/components/form-edit.js ***!
  \*************************************/
/*! exports provided: createFormEditTaskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormEditTaskTemplate", function() { return createFormEditTaskTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
// form-edit.js



const createCardsColorsMarkup = (colors, currentColor) => {
  return colors.map((color) => {
    return (
      `<input type="radio"
          id="color-${color}-4"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
          ${currentColor === color ? `checked` : ``}
       />
       <label for="color-${color}-4" class="card__color card__color--${color}">${color}
       </label>`
    );
  }).join(`\n`);
};

const createRepeatingDaysMarkup = (days, repeatingDays) => {
  return days.map((day) => {
    const isChecked = repeatingDays[day];
    return (
      `<input class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-${day}-4"
          name="repeat"
          value="${day}"
          ${isChecked ? `checked` : ``}
          />
       <label class="card__repeat-day" for="repeat-${day}-4">${day}
       </label>`
    );
  });
};

const createHashtags = (tags) => {
  Array.from(tags).map((tag) => {
    return (
      `<span class="card__hashtag-inner">
          <input type="hidden"
             name="hashtag"
             value="${tag}"
             class="card__hashtag-hidden-input"/>
             <p class="card__hashtag-name">#${tag}
             </p>
          <button type="button" class="card__hashtag-delete">delete
          </button>
      </span>`
    );
  });
};

const createFormEditTaskTemplate = (task) => {
  const {description, tags, dueDate, color, repeatingDays} = task;
  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;


  const date = isDateShowing ? `${dueDate.getDate()} ${_const_js__WEBPACK_IMPORTED_MODULE_0__["MonthNames"][dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(dueDate) : ``;

  const isRepeatingTask = Object.values(repeatingDays).some(Boolean);
  const repeatClass = isRepeatingTask ? `card--repeat` : ``;
  const deadlineClass = isExpired ? `card--deadline` : ``;

  const tagsMarkup = createHashtags(tags);
  const colorsMarkup = createCardsColorsMarkup(_const_js__WEBPACK_IMPORTED_MODULE_0__["Colors"], color);
  const repeatingDaysMarkup = createRepeatingDaysMarkup(_const_js__WEBPACK_IMPORTED_MODULE_0__["Days"], repeatingDays);

  return (
    `<article class="card card--edit card--${color} card--${repeatClass} ${deadlineClass}">
        <form class="card__form" method="get">
            <div class="card__inner">
                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                    <label>
                        <textarea class="card__text"
                        placeholder="Start typing your text here..." name="text">${description}
                        </textarea>
                    </label>
                </div>

                <div class="card__settings">
                    <div class="card__details">
                        <div class="card__dates">
                            <button class="card__date-deadline-toggle" type="button">
                              date: <span class="card__date-status">${isDateShowing ? `yes` : `no`}</span>
                            </button>
                            ${isDateShowing ? `<fieldset class="card__date-deadline">
                                                  <label class="card__input-deadline-wrap">
                                                    <input
                                                      class="card__date"
                                                      type="text"
                                                      placeholder=""
                                                      name="date"
                                                      value="${date} ${time}"
                                                    />
                                                  </label>
                                                </fieldset>` : `` }
                        <button class="card__repeat-toggle" type="button">repeat:
                            <span class="card__repeat-status">yes
                            </span>
                        </button>
                        ${isRepeatingTask ? `<fieldset class="card__repeat-days">
                            <div class="card__repeat-days-inner">
                              ${repeatingDaysMarkup}
                            </div>
                        </fieldset>` : `` }
                    </div>

                        <div class="card__hashtag">
                            <div class="card__hashtag-list">
                              ${tagsMarkup}
                            </div>
                            <label>
                              <input type="text"
                                class="card__hashtag-input"
                                name="hashtag-input"
                                placeholder="Type new hashtag here"/>
                            </label>
                        </div>
                    </div>

                    <div class="card__colors-inner">
                        <h3 class="card__colors-title">Color</h3>
                        <div class="card__colors-wrap">
                          ${colorsMarkup}
                        </div>
                    </div>
                </div>

                <div class="card__status-btns">
                    <button class="card__save" type="submit">save</button>
                    <button class="card__delete" type="button">delete</button>
                </div>
            </div>
        </form>
  </article>`);
};


/***/ }),

/***/ "./src/components/load-more-button.js":
/*!********************************************!*\
  !*** ./src/components/load-more-button.js ***!
  \********************************************/
/*! exports provided: createButtonLoadMoreTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonLoadMoreTemplate", function() { return createButtonLoadMoreTemplate; });
//  load-more-button.js
const createButtonLoadMoreTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`);
};


/***/ }),

/***/ "./src/components/site-menu.js":
/*!*************************************!*\
  !*** ./src/components/site-menu.js ***!
  \*************************************/
/*! exports provided: createMenuSiteTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuSiteTemplate", function() { return createMenuSiteTemplate; });
// site-menu.js
const createMenuSiteTemplate = () => {
  return (
    `<section class="control__btn-wrap">
          <input type="radio"
             name="control"
             id="control__new-task"
             class="control__input visually-hidden"/>
          <label for="control__new-task" class="control__label control__label--new-task"
               >+ ADD NEW TASK
          </label>
          <input type="radio"
               name="control"
               id="control__task"
               class="control__input visually-hidden"
               checked/>
          <label for="control__task" class="control__label">TASKS
          </label>
          <input
              type="radio"
              name="control"
              id="control__statistic"
              class="control__input visually-hidden"/>
          <label for="control__statistic" class="control__label">STATISTICS
          </label>
     </section>`);
};


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/*! exports provided: createCardTaskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardTaskTemplate", function() { return createCardTaskTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
// task.js



const createHashtagsMarkup = (hashtags) => {
  return hashtags
    .map((hashtag) => {
      return (
        `<span class="card__hashtag-inner">
            <span class="card__hashtag-name">
              #${hashtag}
            </span>
          </span>`
      );
    })
    .join(`\n`);
};
const createCardTaskTemplate = (task) => {
  const {description, tags, dueDate, color, repeatingDays} = task;

  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;

  const date = isDateShowing ? `${dueDate.getDate()} ${_const_js__WEBPACK_IMPORTED_MODULE_0__["MonthNames"][dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(dueDate) : ``;

  const hashtags = createHashtagsMarkup(Array.from(tags));
  const repeatClass = Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``;
  const deadlineClass = isExpired ? `card--deadline` : ``;


  return (
    `<article class="card card--${color} ${repeatClass} ${deadlineClass}">
        <div class="card__form">
            <div class="card__inner">
                <div class="card__control">
                    <button type="button" class="card__btn card__btn--edit">edit
                    </button>
                    <button type="button" class="card__btn card__btn--archive">archive
                    </button>
                    <button type="button" class="card__btn card__btn--favorites card__btn--disabled">favorites
                    </button>
                </div>

                <div class="card__color-bar">
                    <svg class="card__color-bar-wave" width="100%" height="10">
                        <use xlink:href="#wave"></use>
                    </svg>
                </div>

                <div class="card__textarea-wrap">
                    <p class="card__text">${description}</p>
                </div>

                <div class="card__settings">
                    <div class="card__details">
                        <div class="card__dates">
                            <div class="card__date-deadline">
                                <p class="card__input-deadline-wrap">
                                    <span class="card__date">${date}</span>
                                    <span class="card__time">${time}</span>
                                </p>
                            </div>
                        </div>

                        <div class="card__hashtag">
                            <div class="card__hashtag-list">
                                ${hashtags}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>`);
};


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: Colors, Days, MonthNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days", function() { return Days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthNames", function() { return MonthNames; });
const Colors = [`black`, `yellow`, `blue`, `green`, `pink`];

const Days = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const MonthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/site-menu.js */ "./src/components/site-menu.js");
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter.js */ "./src/components/filter.js");
/* harmony import */ var _components_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/task.js */ "./src/components/task.js");
/* harmony import */ var _components_form_edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-edit.js */ "./src/components/form-edit.js");
/* harmony import */ var _components_load_more_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/load-more-button.js */ "./src/components/load-more-button.js");
/* harmony import */ var _components_board_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/board.js */ "./src/components/board.js");
/* harmony import */ var _mock_cards_tasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/cards-tasks.js */ "./src/mock/cards-tasks.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");

// main.js









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
render(placeMainControl, Object(_components_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["createMenuSiteTemplate"])());

const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_7__["generateFilters"])();
render(placeMainElement, Object(_components_filter_js__WEBPACK_IMPORTED_MODULE_1__["createFilterTemplate"])(filters));
render(placeMainElement, Object(_components_board_js__WEBPACK_IMPORTED_MODULE_5__["createBordTemplate"])(TASK_NUMBER));

const placeTaskListElement = placeMainElement.querySelector(`.board__tasks`);
const tasks = Object(_mock_cards_tasks_js__WEBPACK_IMPORTED_MODULE_6__["generateTasks"])(TASK_NUMBER);
render(placeTaskListElement, Object(_components_form_edit_js__WEBPACK_IMPORTED_MODULE_3__["createFormEditTaskTemplate"])(tasks[0]));
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTasksCount).forEach((task) => render(placeTaskListElement, Object(_components_task_js__WEBPACK_IMPORTED_MODULE_2__["createCardTaskTemplate"])(task), `beforeend`));

const boardElement = placeMainElement.querySelector(`.board`);
render(boardElement, Object(_components_load_more_button_js__WEBPACK_IMPORTED_MODULE_4__["createButtonLoadMoreTemplate"])());

const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => render(placeTaskListElement, Object(_components_task_js__WEBPACK_IMPORTED_MODULE_2__["createCardTaskTemplate"])(task), `beforeend`));
  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});


/***/ }),

/***/ "./src/mock/cards-tasks.js":
/*!*********************************!*\
  !*** ./src/mock/cards-tasks.js ***!
  \*********************************/
/*! exports provided: generateTask, generateTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTask", function() { return generateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTasks", function() { return generateTasks; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const Tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const generateTags = (tags) => {
  return tags
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    'mo': Math.random() > 0.5,
  });
};

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();
  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(Tags)),
    color: getRandomArrayItem(_const_js__WEBPACK_IMPORTED_MODULE_0__["Colors"]),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
  };

};

const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};



/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];
const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map