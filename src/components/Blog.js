import * as React from "react"

import "../css/global.scss";
import "../css/blog.scss";
import {Grid} from "@material-ui/core";

const Blog = (props) => {
    return <div className={"blog-container"}>
        <div className={"post"}>
            <Grid container>
                <Grid item xs={2} className={"date"}>
                    <span className={"month"}>SIER 23</span><br/>
                    <span className={"year"}>2020</span>
                </Grid>
                <Grid item xs={10} className={"content"}>
                    <div className={"title"}>
                        Poszukujemy pracownika
                    </div>
                    <div className={"description"}>
                        Poszukujemy pracownika z uprawnieniemi do cięcia złomu. CV prosimy składać do biura  - Siedlce, ul. Brzeska 145 A, lub na adres mailowy zlomraj@op.pl
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className={"post"}>
            <Grid container>
                <Grid item xs={2} className={"date"}>
                    <span className={"month"}>SIER 23</span><br/>
                    <span className={"year"}>2020</span>
                </Grid>
                <Grid item xs={10} className={"content"}>
                    <div className={"title"}>
                        Poszukujemy pracownika
                    </div>
                    <div className={"description"}>
                        Poszukujemy pracownika z uprawnieniemi do cięcia złomu. CV prosimy składać do biura  - Siedlce, ul. Brzeska 145 A, lub na adres mailowy zlomraj@op.pl
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className={"post"}>
            <Grid container>
                <Grid item xs={2} className={"date"}>
                    <span className={"month"}>SIER 23</span><br/>
                    <span className={"year"}>2020</span>
                </Grid>
                <Grid item xs={10} className={"content"}>
                    <div className={"title"}>
                        Poszukujemy pracownika
                    </div>
                    <div className={"description"}>
                        Poszukujemy pracownika z uprawnieniemi do cięcia złomu. CV prosimy składać do biura  - Siedlce, ul. Brzeska 145 A, lub na adres mailowy zlomraj@op.pl
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className={"post"}>
            <Grid container>
                <Grid item xs={2} className={"date"}>
                    <span className={"month"}>SIER 23</span><br/>
                    <span className={"year"}>2020</span>
                </Grid>
                <Grid item xs={10} className={"content"}>
                    <div className={"title"}>
                        Poszukujemy pracownika
                    </div>
                    <div className={"description"}>
                        Poszukujemy pracownika z uprawnieniemi do cięcia złomu. CV prosimy składać do biura  - Siedlce, ul. Brzeska 145 A, lub na adres mailowy zlomraj@op.pl
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Blog
