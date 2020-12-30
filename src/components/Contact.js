import * as React from "react"

import "../css/global.scss";
import "../css/contact.scss";
import {Grid, TextField} from "@material-ui/core";

const Contact = (props) => {
    return <div className={"contact-container"}>
        <div className={"adnotation"}>
            Wszytkie dane kontaktowe razem z dojazdem znajdują się na stopce strony (na samym dole).
        </div>
        <div className={"form"}>
            <div className={"title"}>Formularz kontaktowy</div>
            <Grid container>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Imię i nazwisko (opcjonalne)" variant="outlined" fullWidth className={"form-input"}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth className={"form-input"}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Treść" variant="outlined" fullWidth className={"form-input"} multiline rows={6}/>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default Contact
