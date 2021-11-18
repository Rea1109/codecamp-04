export function getDate(myDate:Date) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`; // 2021-11-10
}

export function remakeTitle(title:string) {
  if (title.length > 14) {
    return `${title.slice(0, 10)}....`;
  } else {
    return title;
  }
}