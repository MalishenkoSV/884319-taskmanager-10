import {COLORS} from '../const.js';
import {getRandomBoolean, getRandomElement, getRandomDate} from '../utils.js';

const MIN_TAGS_COUNT = 0;
const MAX_TAGS_COUNT = 3;

const DESCRIPTION_ITEMS = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];
export const TaskDay = {
  MO: `mo`,
  TU: `tu`,
  WE: `we`,
  TH: `th`,
  FR: `fr`,
  SA: `sa`,
  SU: `su`,
};

const TAGS = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const generateTags = (tags) => {
  return tags.filter(() => getRandomBoolean()).slice(MIN_TAGS_COUNT, MAX_TAGS_COUNT);
};
const repeatDayReducer = (days, day) => {
  days[day] = getRandomBoolean(0.9);
  return days;
};
const getRepeatingDays = (days) =>
  days.reduce(repeatDayReducer, {});


const generateTask = () => {
  const dueDate = getRandomBoolean() ? null : getRandomDate();
  const weekDays = Object.values(TaskDay);
  return {
    description: getRandomElement(DESCRIPTION_ITEMS),
    dueDate,
    repeatingDays: getRepeatingDays(weekDays),
    tags: generateTags(TAGS),
    color: getRandomElement(COLORS),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean(),
    isRepeated: Date.now() > dueDate,
  };

};

const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};
export {generateTask, generateTasks};
