import Head from 'next/head'
import { Layout } from "@/styles";
import { getNextFiveYears } from '@/lib/helpers';

const IndexPage = () => {

  let years = getNextFiveYears();

  return (
    <Layout>
      {years.map((year) => (
        <button>{year}</button>
      ))}
    </Layout>
  )
}

export default IndexPage;