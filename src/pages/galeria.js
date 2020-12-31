import React from 'react';
import Layout from "../components/Layout";

import '../css/gallery.scss';
import {Grid} from "@material-ui/core";

const GalleryPage = () => {

    return <Layout>
        <div className={"gallery container"}>
            <h2>GALERIA</h2>

            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3}>
                    <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
                </Grid>
            </Grid>
        </div>
    </Layout>
}

export default GalleryPage
