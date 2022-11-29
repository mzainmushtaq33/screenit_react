import months from "../utilLists/months";

const dateConverter = (value) => {
  let date = new Date(value);

  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

export { dateConverter };
