import * as React from "react"
import { Link } from "gatsby"
import {Button} from "@material-ui/core";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
        <div className={"container"} style={{'minHeight': 'calc(100vh - 650px)'}}>
          <title>404</title>
          <h1>😔 Ups... wygląda na to że się zgubiłeś</h1>
          <p>
              <Link style={{"textDecoration": "none"}} to="/"><Button className={"button active"} style={{"maxWidth": "300px"}}>Strona główna</Button></Link>
          </p>
        </div>
    </Layout>
  )
}

export default NotFoundPage
