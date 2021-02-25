import * as React from "react";
import Layout from "../components/Layout";

import '../css/home.scss';
import {Button, Grid} from "@material-ui/core";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Axios from "axios";
import config from "../../config";

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            isBlogPostsLoading: false
        }
    }

    componentDidMount() {
        this.setState({isBlogPostsLoading: true}, () => {
            Axios.get(`${config.apiUrl}&content_type=blogPost`).then((res) => {
                console.log(res.data);
                this.setState({blogPosts: res.data.items});
            });
        });
    }

    render() {
        return <Layout>
            <div className={"container"} style={{'minHeight': 'calc(100vh - 650px)'}}>
                <h2>Ogłoszenia</h2>
                <Blog isPagination={false} posts={this.state.blogPosts}/>
            </div>
        </Layout>
    }
}

export default BlogPage;
