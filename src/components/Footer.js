import * as React from "react"

import '../css/footer.scss';
import {Grid} from "@material-ui/core";

const Footer = () => {

    return <div className={"footer"}>
        <div className={"map"}>Mapa</div>
        <div className={"info"}>
            <Grid container>
                <Grid item xs={12}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="167" height="24" viewBox="0 0 167 24" className={"logo"}>
                        <g id="Group_5" data-name="Group 5" transform="translate(-6 -16)">
                            <text id="ZŁOMRAJ" transform="translate(63 18)" fill="#dcdcdc" font-size="18" font-family="LibreBaskerville-Regular, Libre Baskerville"><tspan x="0" y="17">ZŁOMRAJ</tspan></text>
                            <rect id="Rectangle_1" data-name="Rectangle 1" width="48" height="24" transform="translate(6 16)" fill="#dcdcdc"/>
                            <text id="PHU" transform="translate(8 18)" fill="#242424" font-size="18" font-family="LibreBaskerville-Regular, Libre Baskerville"><tspan x="4" y="16   ">PHU</tspan></text>
                            <line id="Line_1" data-name="Line 1" x2="78" transform="translate(70.5 39.5)" fill="none" stroke="#707070" stroke-width="0.5"/>
                        </g>
                    </svg>
                </Grid>
                <Grid item xs={6} className={"item"}>
                    <span>ul. Floriańska 91</span>
                    <span>08-110 Siedlce</span>
                    <span>Tel: 798 508 529</span>
                </Grid>
                <Grid item xs={6} className={"item"}>
                    <span>ul. Bohaterów 63</span>
                    <span>21-300 Radzyń Podlaski</span>
                    <span>Tel: 600 852 947</span>
                </Grid>
                <Grid item xs={6} className={"item"}>
                    <span>Godziny otwarcia</span>
                    <span>pn-pt 7:00-15:30</span>
                    <span>sobota 7:00-12:00</span>
                </Grid>
                <Grid item xs={6} className={"item"}>
                    <span>Godziny otwarcia</span>
                    <span>pn-pt 8:00-15:00</span>
                    <span>sobota 8:00-12:00</span>
                </Grid>
                <Grid item xs={12} className={"item"}>
                    <span><b>Email: zlomraj@op.pl</b></span>
                    <span><b>Fax:</b>25 632 79 44</span>
                </Grid>
                <Grid item xs={12} className={"item"}>
                    <span>PHU ZŁOMRAJ</span>
                    <span>JOLANTA RAJEWSKA</span>
                    <span>Nip: 821-146-73-02  Regon: 711570365</span>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Footer


