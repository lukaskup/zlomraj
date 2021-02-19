import * as React from "react";
import Layout from "../components/Layout";

import '../css/home.scss';
import {Button, Grid} from "@material-ui/core";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Axios from "axios";
import config from "../../config";

class PricingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pricingCategories: [],
            pricingItems: [],
            isPricingLoading: false
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
            <div className={"container"} style={{'minHeight': 'calc(100vh - 650px)'}}>
                <h2>Cennik</h2>
                <Pricing isPagination={true} pricingCategories={this.state.pricingCategories} pricingItems={this.state.pricingItems}/>
            </div>
        </Layout>
    }
}

export default PricingPage;
