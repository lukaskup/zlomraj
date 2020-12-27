import React, { useState } from 'react';
import Layout from "../components/Layout";

import '../css/home.scss';
import {Button, Grid} from "@material-ui/core";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";

const IndexPage = () => {

  const [activeContent, setActiveContent] = useState("pricing");
  return <Layout>
      <div className={"about-section"}>
        <div className={"content-container"}>
          <h2>O FIRMIE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      <div className={"content-switcher"}>
        <div className={"container"}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Button className={`button${activeContent === "pricing" ? " active" : ""}`} onClick={() => setActiveContent("pricing")}>CENNIK</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={`button${activeContent === "blog" ? " active" : ""}`} onClick={() => setActiveContent("blog")}>OGŁOSZENIA</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={`button${activeContent === "contact" ? " active" : ""}`} onClick={() => setActiveContent("contact")}>KONTAKT</Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={"container"}>
        {activeContent === "pricing" ? <Pricing isPagination={true}/> : (activeContent === "contact" ? "" : <Blog isPagination={true}/>)}
      </div>
  </Layout>
}

export default IndexPage
