import * as React from "react"
import Layout from "../components/Layout";

import '../css/home.scss';

const IndexPage = () => {
  return <Layout>
    <div className={"about-section"}>
      <h2>O FIRMIE</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </Layout>
}

export default IndexPage
