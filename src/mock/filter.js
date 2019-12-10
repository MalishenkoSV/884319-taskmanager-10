const generateFilters = (tasks) => {
  const filters = {
    all: 0,
    overdue: 0,
    today: 0,
    favorites: 0,
    repeating: 0,
    tags: 0,
    archive: 0
  };

  const currentDate = new Date();
  const counter = tasks.reduce((value, task) => {
    value.overdue += +(task.dueDate < currentDate);
    value.today += (new Date(task.dueDate).toDateString() === new Date(Date.now()).toDateString());
    value.favorites += +(task.isFavorite);
    value.archive += +(task.isArchive);
    value.all = (tasks.length - value.archive);
    value.repeating += +(Object.values(task.repeatingDays).some((day) => day));
    value.tags += +(task.tags.size > 0);
    return value;
  }, filters);


  const result = Object.entries(counter).map((element) => {
    return {
      title: element[0],
      count: element[1]
    };
  });

  return result;
};

export {generateFilters};
