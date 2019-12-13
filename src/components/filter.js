
const getDisabled = (count) => {
  return count === 0 ? `disabled` : ``;
};
const createFilterMarkup = (filter, isChecked) => {
  const {title, count} = filter;

  return (
    ` <input type="radio"
      id="filter__${title}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${getDisabled(count)}
    />
      <label for="filter__${title}" class="filter__label">${title}
        <span class="filter__${title}-count">${count}</span>
      </label>`
  );
};
export const createFilterTemplate = (filters) => {
  const filtersMakeup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
       ${filtersMakeup}
     </section>`
  );
};
