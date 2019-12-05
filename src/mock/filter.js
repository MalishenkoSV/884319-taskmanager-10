import {getFullDate} from '../utils.js';
const filtersNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
];


const getFilterCountItems = (title, tasks) => {

  switch (title) {
    case `overdue`:
      return tasks.filter((task) => task.dueDate < Date.now()).length;
    case `today`:
      return tasks.filter((task) => getFullDate(task.dueDate) === getFullDate()).length;
    case `favorites`:
      return tasks.filter((task) => task.isFavorite).length;
    case `repeating`:
      return tasks.filter((task) => Object.values(task.repeatingDays).some(Boolean)).length;
    case `tags`:
      return tasks.filter((task) => Array.from(task.tags).length).length;
    case `archive`:
      return tasks.filter((task) => task.isArchive).length;
    default:
      return tasks.length;
  }
};
const generateFilters = (tasks) => {
  return filtersNames.map((it) => {
    return {
      name: it,
      count: getFilterCountItems(it, tasks),
    };
  });
};

export {generateFilters};
