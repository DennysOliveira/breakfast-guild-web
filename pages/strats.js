import Layout from "../components/Layout"
import StratsMD from "../components/StratsMarkdown"

export default function About() {
  var title = "Strategies - Breakfast Guild"

  return (
    <>
      <Layout title={title}>
        <StratsMD />
      </Layout>      
    </>
  )
}
