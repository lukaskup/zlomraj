import * as React from "react"

import "../css/global.scss";
import Navbar from "./Navbar";

const Layout = (props) => {
    return <div>
        <Navbar/>
        {props.children}
    </div>
}

export default Layout
