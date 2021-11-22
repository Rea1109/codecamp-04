export function getDate(myDate: Date) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`; // 2021-11-10
}

export function remakeTitle(title: string) {
  if (title.length > 12) {
    return `${title.slice(0, 10)}....`;
  } else {
    return title;
  }
}

export function remakeContents(contents: string) {
  if (contents.length > 25) {
    return `${contents.slice(0, 25)}....`;
  } else {
    return contents;
  }
}

export function getTemp(temp: number) {
  return (temp - 273.15).toFixed(1);
}
