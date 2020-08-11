import React, { useState } from "react"
import { PageProps } from "gatsby"

import { CircularProgress } from "@material-ui/core"
import Layout from "../components/layout"
import worker from "../worker"
import * as model from "../worker/model"

const IndexPage: React.FC<PageProps> = () => {
  const [result, setResult] = useState(0)

  const handleClick1 = async () => {
    if (!worker) return
    const num = await worker.add(10, 6)
    setResult(num)
  }

  const handleClick2 = async () => {
    const num = model.add(10, 1000)
    setResult(num)
  }

  return (
    <Layout>
      <button onClick={handleClick1} style={{ margin: "0px 10px 0 0 " }}>
        {"with worker"}
      </button>
      <button onClick={handleClick2}>{"without worker"}</button>
      <p>{result}</p>
      <CircularProgress />
    </Layout>
  )
}
export default IndexPage
