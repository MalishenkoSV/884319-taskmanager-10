const generateFilters = (tasks) => {
  const filters = {
    ALL: 0,
    OVERDUE: 0,
    TODAY: 0,
    FAVORITES: 0,
    REPIATING: 0,
    TAGS: 0,
    ARCHIVE: 0
  };

  const currentDate = new Date();
  const counter = tasks.reduce((value, task) => {
    value.OVERDUE += +(task.dueDate && task.dueDate < currentDate);
    value.TODAY += +(task.dueDate > currentDate);
    value.FAVORITES += +(task.isFavorite);
    value.ARCHIVE += +(task.isArchive);
    value.ALL = tasks.length - value.ARCHIVE;
    value.REPIATING += +(Object.values(task.repeatingDays).some((day) => day));
    value.TAGS += +(task.tags.size > 0);
    return value;
  }, filters);


  const result = Object.entries(counter).map((el) => {
    return {
      title: el[0],
      count: el[1]
    };
  });

  return result;
};

export {generateFilters};
