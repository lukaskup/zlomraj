import React from 'react';
import Layout from "../components/Layout";

import '../css/gallery.scss';

export default ({data}) => {

    const [modalPhoto, setModalPhoto] = React.useState(1);

    return <Layout>
        <h2>GALERIA</h2>
        <div className={"gallery container"}>
            <div className={"item photo1"} onClick={() => {setModalPhoto(1)}}/>
            <div className={"item photo2"} onClick={() => {setModalPhoto(2)}}/>
            <div className={"item photo3"} onClick={() => {setModalPhoto(3)}}/>
            <div className={"item photo4"} onClick={() => {setModalPhoto(4)}}/>
        </div>
        <div className={`modal${modalPhoto === 0 ? " hidden" : ""}`} onClick={() => {setModalPhoto(0)}}>
            <div className={`modal-content photo${modalPhoto}`}>
            </div>
        </div>
    </Layout>
}