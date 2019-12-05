const RANDOM_LIMIT = 0.5;
const MIN_RANDOM_NUMBER = 0;

export const getRandomIntegerNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomBoolean = () => {
  return Math.random() > RANDOM_LIMIT;
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(MIN_RANDOM_NUMBER, array.length);

  return array[randomIndex];
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

export const isToday = (date) => {
  const today = new Date();
  return date.getDate() === today.getDate() &&
  date.getMonth() === today.getMonth() &&
  date.getFullYear() === today.getFullYear();
};

export const isExpired = (date) => {
  const today = new Date();
  return date < today;
};
