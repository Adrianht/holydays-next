import { Layout } from '@/styles'
import { getNextFiveYears } from '@/lib/helpers'

const IndexPage = () => {
  const years = getNextFiveYears()

  return (
    <Layout>
      {years.map((year, index) => (
        <button key={index}>{year}</button>
      ))}
    </Layout>
  )
}

export default IndexPage
