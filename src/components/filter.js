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
export const createFilterTemplate = (filters) => {
  const filtersMakeup = filters.map((it, i) => createFilterMakeup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
       ${filtersMakeup}
     </section>`
  );
};
