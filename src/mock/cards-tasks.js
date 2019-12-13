import {COLORS} from '../const.js';
import {getRandomBoolean, getRandomElement, getRandomDate} from '../utils.js';

const TagsCount = {
  MIN: 0,
  MAX: 3
};
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
const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};
const TAGS = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`
];

const generateTags = (tags) => {
  return tags.filter(() => getRandomBoolean()).slice(TagsCount.MIN, TagsCount.MAX);
};

const getRepeatingDays = () => {
  return {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  };
};

const repeatingDays =  Object.assign({}, DefaultRepeatingDays);

const generateTask = () => {
  const dueDate = getRandomBoolean() ? null : getRandomDate();
  return {
    description: getRandomElement(DESCRIPTION_ITEMS),
    dueDate,
    repeatingDays: dueDate ? repeatingDays : getRepeatingDays(),
    tags: new Set(generateTags(TAGS)),
    color: getRandomElement(COLORS),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean()
  };

};

const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};
export {generateTask, generateTasks};
