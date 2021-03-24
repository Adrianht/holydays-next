import { fetchHoliday, fetchLongWeekend, getNextFiveYears } from '@/lib/helpers'
import { Container, Weekend } from '@/styles'
import { format, parseISO, eachDayOfInterval, isWeekend } from 'date-fns'
import { GetStaticProps } from 'next'

export async function getStaticPaths() {
  const paths = getNextFiveYears()
  const pathToString = paths.map(String)
  const newPaths = []
  for (const slug of pathToString) {
    newPaths.push({ params: { slug: slug } })
  }
  return {
    paths: newPaths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  parsedWeekends: SingleWeekend[]
  holidays: HolidayObjectProp[]
}> = async ({ params }) => {
  // eslint-disable-next-line
  const path = params?.slug!
  const singlePath = Array.isArray(path) ? path[0] : path
  const longWeekends = await fetchLongWeekend(singlePath)
  const holidays = await fetchHoliday(singlePath)
  const parsedWeekends = JSON.parse(longWeekends)
  return {
    props: {
      parsedWeekends,
      holidays,
    },
  }
}

interface HolidayObjectProp {
  date: string
  localName: string
  name: string
  countryCode: string
  fixed: boolean
  global: boolean
  counties?: any
  launchYear?: any
  type: string
}

interface SingleWeekend {
  startDate: string
  endDate: string
  dayCount: number
  needBridgeDay: boolean
}

const Main: React.FC<{ parsedWeekends: SingleWeekend[]; holidays: HolidayObjectProp[] }> = ({
  parsedWeekends,
  holidays,
}) => {
  const onlyDates = (array: HolidayObjectProp[]) => {
    const dates: string[] = []
    array.forEach((element: HolidayObjectProp) => {
      dates.push(format(parseISO(element.date), 'dd/MM/yyyy'))
    })
    return dates
  }

  const dayName = (weekend: SingleWeekend, day: number) => {
    const all = allDays(weekend)

    return format(all[day], 'eeee dd, MMMM')
  }

  const allDays = (weekend: SingleWeekend) => {
    const start = parseISO(weekend.startDate)
    const end = parseISO(weekend.endDate)
    return eachDayOfInterval({ start, end })
  }

  const dayIsBridgeDay = (weekend: SingleWeekend, day: number) => {
    if (!weekend.needBridgeDay) {
      return ''
    }

    const all = allDays(weekend)
    const currentDay = format(all[day], 'dd/MM/yyyy')

    const onlyDays = onlyDates(holidays)
    const exists = onlyDays.includes(currentDay)

    if (exists) {
      return ''
    }

    const localDay = all[day]
    const checkWeekend = isWeekend(localDay)

    if (checkWeekend) {
      return ''
    }

    return 'bridge-day'
  }

  return (
    <Container>
      {parsedWeekends.map((weekend: SingleWeekend, index: number) => (
        <div key={index}>
          <p className="weekend-title">Long weekend {index + 1}</p>
          <Weekend>
            {[...Array(weekend.dayCount).keys()].map((el) => (
              <div key={el} className={`single-day ${dayIsBridgeDay(weekend, el)}`}>
                {dayName(weekend, el)}
              </div>
            ))}
          </Weekend>
        </div>
      ))}
    </Container>
  )
}

export default Main
