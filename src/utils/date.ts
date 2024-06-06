export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const formatMonth = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  const formatDay = day < 10 ? `0${day}` : day;

  return `${year}.${formatMonth}.${formatDay}`;
};
