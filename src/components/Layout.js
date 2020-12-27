import * as React from "react"

import "../css/global.scss";
import Navbar from "./Navbar";
import {Helmet} from "react-helmet";
import Footer from "./Footer";

const Layout = (props) => {
    return <div>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        </Helmet>
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
}

export default Layout
