import { fetchHoliday, fetchLongWeekend, getNextFiveYears } from "@/lib/helpers";
import { Container, Weekend } from "@/styles";
import { format, parseISO, eachDayOfInterval, isWeekend } from "date-fns";

export async function getStaticPaths() {
  const paths = getNextFiveYears();
  const pathToString = paths.map(String);
  const newPaths = [];
  for (let slug of pathToString) {
    newPaths.push({params: {slug: slug}})
  }
  return {
    paths: newPaths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const path = params.slug
  const longWeekends = await fetchLongWeekend(path)
  const holidays = await fetchHoliday(path)
  const parsedWeekends = JSON.parse(longWeekends);
  return {
    props: {
      parsedWeekends,
      holidays
    }
  }
}


const Main = ({ parsedWeekends, holidays }) => {

  // let correct = JSON.parse(longWeekends);
  const onlyDates = array => {
    const dates = [];
    array.forEach(element => {
      dates.push(format(parseISO(element.date), 'dd/MM/yyyy'));
    });
    return dates;
  }

  const dayName = (weekend, day) => {
    const all = allDays(weekend);

    return format(all[day], 'eeee dd, MMMM');
  }

  const allDays = weekend => {
    const start = parseISO(weekend.startDate);
    const end = parseISO(weekend.endDate);
    return eachDayOfInterval({ start, end });
  }

  const dayIsBridgeDay = (weekend, day) => {
    if (!weekend.needBridgeDay) {
      return '';
    }

    const all = allDays(weekend);
    const currentDay = format(all[day], 'dd/MM/yyyy');

    const onlyDays = onlyDates(holidays)
    const exists = onlyDays.includes(currentDay);
    
    if (exists) {
      return '';
    }

    const localDay = all[day];
    const checkWeekend = isWeekend(localDay);

    if (checkWeekend) {
      return '';
    }

    return 'bridge-day';
  }
  
  return(
    <Container>
      {parsedWeekends.map((weekend, index) => (
        <div key={index}>
          <p className="weekend-title">Long weekend {index + 1}</p>
          <Weekend>
            {[...Array(weekend.dayCount).keys()].map((el) => (
              <div key={el} className={`single-day ${dayIsBridgeDay(weekend, el)}`}>{dayName(weekend, el)}</div>
            ))}
          </Weekend>
        </div>

      ))}

      {/* {parsedWeekends} */}
    </Container>
  )
}

export default Main;