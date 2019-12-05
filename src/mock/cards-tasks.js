import {COLORS} from '../const.js';
import {getRandomBoolean, getRandomArrayItem, getRandomDate} from '../utils.js';

const MIN_TAGS_COUNT = 0;
const MAX_TAGS_COUNT = 3;

const DESCRIPTION_ITEM = [
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

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    'mo': getRandomBoolean(),
  });
};

const generateTask = () => {
  const dueDate = getRandomBoolean() ? null : getRandomDate();
  const days = dueDate ? DefaultRepeatingDays : generateRepeatingDays();
  return {
    description: getRandomArrayItem(DESCRIPTION_ITEM),
    dueDate,
    repeatingDays: days,
    tags: new Set(generateTags(TAGS)),
    color: getRandomArrayItem(COLORS),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean(),
    isRepeated: Object.values(days).some((day) => day),
  };

};

const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};
export {generateTask, generateTasks};
