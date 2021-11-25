// 2016년
function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016-${a}-${b}`);
  return day[date.getDay()];
}

function mento(a, b) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(2016, a - 1, b).getDay();
  return days[day];
}
