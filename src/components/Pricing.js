import * as React from "react"

import "../css/global.scss";
import "../css/pricing.scss";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";

const categories = [
    'Stal 1',
    'Stal 2',
    'Stal 3',
    'Stal 4',
    'Stal 5',
    'Stal 6',
];

const values = [
    {'name': 'stal 1', 'price': "0,70 zł"},
    {'name': 'stal 2', 'price': "0,80 zł"},
    {'name': 'stal 3', 'price': "0,90 zł"},
    {'name': 'stal 4', 'price': "0,20 zł"},
    {'name': 'stal 5', 'price': "0,30 zł"},
    {'name': 'stal 6', 'price': "0,40 zł"},
    {'name': 'stal 7', 'price': "0,50 zł"}
]

const Pricing = (props) => {

    const [activeCategory, setActiveCategory] = React.useState('Stal 1');

    return <div className={"pricing"}>
        <FormControl variant="outlined" style={{"marginTop": "20px"}}>
            <InputLabel id="demo-simple-select-outlined-label">Kategoria</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                label="Kategoria"
                className={"category-select"}
            >
                {categories.map((value) => <MenuItem value={value}>{value}</MenuItem>)}
            </Select>
        </FormControl>
        <div className={"pricing-table"}>
            <Grid container>
                <Grid item xs={6} className={"pricing-table-item"}>
                    <span><b>NAZWA</b></span>
                </Grid>
                <Grid item xs={6} className={"pricing-table-item"}>
                    <span><b>CENA NETTO/KG</b></span>
                </Grid>
                {values.map((value) =>
                    <Grid container className={"pricing-table-row"}>
                        <Grid item xs={6} className={"pricing-table-item"}>
                            <span>{value.name}</span>
                        </Grid>
                        <Grid item xs={6} className={"pricing-table-item"}>
                            <span>{value.price}</span>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    </div>
}

export default Pricing
