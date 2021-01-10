import * as React from "react";
import Layout from "../components/Layout";

import '../css/home.scss';
import {Button, Grid} from "@material-ui/core";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Axios from "axios";
import config from "../../config";

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pricingCategories: [],
      pricingItems: [],
      isPricingLoading: false,
      activeContent: "pricing"
    }
  }

  componentDidMount() {
    this.setState({isPricingLoading: true}, () => {
      Axios.get(`${config.apiUrl}&content_type=pricingCategory`).then((res) => {
        let pricingCategories = res.data.items.map((item) => {
          return {
            id: item.sys.id,
            name: item.fields.name
          }
        });
        this.setState({pricingCategories: pricingCategories, activeCategory: pricingCategories[0]}, () => {
          Axios.get(`${config.apiUrl}&content_type=pricing`).then((res) => {
            this.setState({pricingItems: res.data.items.map((item) => item.fields), isPricingLoading: false});
          })
        });
      });
    });
  }

  render() {
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
              <Button className={`button${this.state.activeContent === "pricing" ? " active" : ""}`}
                      onClick={() => this.setState({activeContent: "pricing"})}>CENNIK</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={`button${this.state.activeContent === "blog" ? " active" : ""}`}
                      onClick={() => this.setState({activeContent: "blog"})}>OGŁOSZENIA</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={`button${this.state.activeContent === "contact" ? " active" : ""}`}
                      onClick={() => this.setState({activeContent: "contact"})}>KONTAKT</Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={"container"}>
        {this.state.activeContent === "pricing" ? <Pricing isPagination={true} pricingCategories={this.state.pricingCategories} pricingItems={this.state.pricingItems}/> : (this.state.activeContent === "contact" ? <Contact/> :
            <Blog isPagination={true}/>)}
      </div>
    </Layout>
  }
}

export default IndexPage;
