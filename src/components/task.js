import {createElement, formatTime} from "./../util.js";
import {MONTH_NAMES} from '../const.js';

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


export const createCardTaskTemplate = (task) => {
  const {description, tags, dueDate, color, repeatingDays, isArchive, isFavorite} = task;
  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;

  const cardDate = isDateShowing ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
  const cardTime = isDateShowing ? formatTime(dueDate) : ``;
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
                    <button type="button" class="card__btn card__btn--archive ${isArchive ? `` : `card__btn--disabled`}">archive
                    </button>
                    <button type="button" class="card__btn card__btn--favorites ${isFavorite ? `` : `card__btn--disabled`}">favorites
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
           ${dueDate ? `<div class="card__dates">
                            <div class="card__date-deadline">
                                <p class="card__input-deadline-wrap">
                                    <span class="card__date">${cardDate ? cardDate : ``}</span>
                                    <span class="card__time">${cardTime ? cardTime : ``}</span>
                                </p>
                            </div>` : ``}
                            <div class="card__hashtag">
                                <div class="card__hashtag-list">
                                    ${hashtags}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </article>`
  );
};

export default class Task {
  constructor(task) {
    this._element = null;
    this._task = task;
  }
  getTemplate() {
    return createCardTaskTemplate(this._task);
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
    return this._element;
  }
}
