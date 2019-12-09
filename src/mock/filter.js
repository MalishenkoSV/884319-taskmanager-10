const generateFilters = (tasks) => {
  let filters = {
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
    value.ALL += 1;
    value.OVERDUE += task.dueDate < currentDate;
    value.TODAY += new Date(task.dueDate).toDateString() === currentDate.toDateString();
    value.FAVORITES += task.isFavorite;
    value.ARCHIVE += task.isArchive;
    value.REPIATING += Object.values(task.repeatingDays).some((day) => day);
    value.TAGS = task.tags.size > 0 ? ++value.TAGS : value.TAGS;
    return value;
  }, filters);

  // counter.tags = new Set(counter.tags).size;

  const result = Object.entries(counter).map((el) => {
    return {
      title: el[0],
      count: el[1]
    };
  });

  return result;
};

export {generateFilters};
