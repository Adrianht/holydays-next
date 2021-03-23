import Head from 'next/head'
import { NextPage } from "next";
import { Layout } from "@/styles";

interface Props {
  launch: {
    asd: string
  }
}

const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.asd)
  return (
    <Layout>
    
    </Layout>
  )
}

export default IndexPage;