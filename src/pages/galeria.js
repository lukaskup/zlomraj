import React from 'react';
import Layout from "../components/Layout";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../css/gallery.scss';

export default ({data}) => {

    const [modalPhoto, setModalPhoto] = React.useState(0);

    const isDescendant = (el, parentId) => {
        let isChild = false

        if (el.id === parentId) { //is this the element itself?
            isChild = true
        }

        while (el = el.parentNode) {
            if (el.id == parentId) {
                isChild = true
            }
        }

        return isChild
    }

    const photos = [
        1, 2, 3, 4
    ]

    const handleNext = (e) => {
        // setModalPhoto(modalPhoto === photos.length - 1 ? 0 : modalPhoto + 1)
    }

    const handleBack = (e) => {
        // setModalPhoto(modalPhoto === 1 ? photos.length + 1 : modalPhoto - 1)
    }

    const handleCloseModal = (e) => {
        //if class == modal backgroud then hide modal in another way dont do shit
    }

    return <Layout>
        <h2>GALERIA</h2>
        <div className={"gallery container"}>
            <div className={"item photo1"} onClick={() => {setModalPhoto(1)}}/>
            <div className={"item photo2"} onClick={() => {setModalPhoto(2)}}/>
            <div className={"item photo3"} onClick={() => {setModalPhoto(3)}}/>
            <div className={"item photo4"} onClick={() => {setModalPhoto(4)}}/>
        </div>
        <div className={`modal${modalPhoto === 0 ? " hidden" : ""}`} onClick={(e) => {setModalPhoto(0)}}>
            <div className={`modal-content photo${modalPhoto}`}>
                <div className={"btn back"} id={"btn-back"} onClick={() => handleBack()}><ArrowBackIosIcon className={"icon"}/></div>
                <div className={"btn next"} id={"btn-next"} onClick={() => handleNext()}><ArrowForwardIosIcon className={"icon"}/></div>
            </div>
        </div>
    </Layout>
}