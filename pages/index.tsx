import { getNextFiveYears } from '@/lib/helpers'
import { LinkButton } from '@/styles'
import Link from 'next/link'

const IndexPage = () => {
  const years = getNextFiveYears()

  return (
    <>
      {years.map((year) => (
        <Link href={`/${year}`} key={year}>
          <LinkButton>{year}</LinkButton>
        </Link>
      ))}
    </>
  )
}

export default IndexPage
