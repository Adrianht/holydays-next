import {
  addYears, getYear,
} from 'date-fns';

export function getNextFiveYears() {
  let currentDate = new Date();
  let yearArray = [];
  for (let index = 0; index < 5; index+=1) {
    yearArray.push(getYear(currentDate));
    currentDate = addYears(currentDate, 1);
  }

  return yearArray;
}

export async function fetchHoliday(year){
  const response = await fetch(`http://localhost:3001/allHolidays?year=${year}`, {
    method: "get",
    headers: {
      'content-type': 'application/json'
    },
  })

  return response.json();
}

export async function fetchLongWeekend(year){
  const response = await fetch(`http://localhost:3001/longWeekend?year=${year}`, {
    method: "get",
    headers: {
      'content-type': 'application/json'
    },
  })
  return response.json()
}