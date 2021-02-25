import * as React from "react"

import "../css/global.scss";
import "../css/blog.scss";
import {Grid} from "@material-ui/core";

const Blog = (props) => {
    return <div className={"blog-container"}>
        {props.posts.map(post => {
            return <div className={"post"} key={post.fields.title}>
                <Grid container>
                    <Grid item xs={2} className={"date"}>
                        <span className={"month"}>SIER 23</span><br/>
                        <span className={"year"}>2020</span>
                    </Grid>
                    <Grid item xs={10} className={"content"}>
                        <div className={"title"}>
                            {post.fields.title}
                        </div>
                        <div className={"description"}>
                            {post.fields.description.replace(/\u21B5/g,'<br/>')}
                        </div>
                    </Grid>
                </Grid>
            </div>
        })}
    </div>
}

export default Blog
