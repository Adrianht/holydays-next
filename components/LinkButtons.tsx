import { getNextFiveYears } from '@/lib/helpers'
import { LinkButton, LinkButtonContainer } from '@/styles'
import Link from 'next/link'

const LinkButtons: React.FC = () => {
  const years = getNextFiveYears()

  return (
    <LinkButtonContainer>
      {years.map((year) => (
        <Link href={`/${year}`} key={year}>
          <LinkButton>{year}</LinkButton>
        </Link>
      ))}
    </LinkButtonContainer>
  )
}

export default LinkButtons
