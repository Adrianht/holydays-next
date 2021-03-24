import { addYears, getYear } from 'date-fns'

export function getNextFiveYears() {
  let currentDate = new Date()
  const yearArray = []
  for (let index = 0; index < 5; index += 1) {
    yearArray.push(getYear(currentDate))
    currentDate = addYears(currentDate, 1)
  }

  return yearArray
}

export async function fetchHoliday(year: string) {
  // const response = await fetch(`http://localhost:3001/allHolidays?year=${year}`, {
  const response = await fetch(`https://date.nager.at/api/v2/publicholidays/${year}/NO`, {
    headers: { Accept: 'application/json' },
  })

  const data = await response.json()

  return data;
}

export async function fetchLongWeekend(year: string) {
  // const response = await fetch(`http://localhost:3001/longWeekend?year=${year}`, {
  const response = await fetch(`https://date.nager.at/api/v2/LongWeekend/${year}/NO`, {
    headers: { Accept: 'application/json' },
  })

  const data = await response.json()

  return data;
}
