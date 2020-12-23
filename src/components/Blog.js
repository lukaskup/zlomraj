import * as React from "react"

import "../css/global.scss";

const Blog = (props) => {
    return <div>
        Blog <br/>
        {props.isPagination ? "paginacja" : "bez paginacji"}
    </div>
}

export default Blog
