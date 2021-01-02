import React from 'react';
import Layout from "../components/Layout";

import '../css/gallery.scss';

export default ({data}) => {

    return <Layout>
        <h2>GALERIA</h2>
        <div className={"gallery container"}>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
            <div className={"item"} style={{"backgroundImage": "url('https://img.hmn.com/fit-in/900x506/filters:upscale()/stories/2011/10/junkyardUSA_1000.jpg')"}}/>
        </div>
    </Layout>
}