import * as React from "react"

import "../css/global.scss";
import "../css/pricing.scss";
import {FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const values = [
    'Stal 1',
    'Stal 2',
    'Stal 3',
    'Stal 4',
    'Stal 5',
    'Stal 6',
];

const Pricing = (props) => {

    const [activeCategory, setActiveCategory] = React.useState('Stal 1');

    return <div className={"pricing"}>
        <FormControl variant="outlined" style={{"marginTop": "20px"}}>
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                label="Kategoria"
                className={"category-select"}
            >
                {values.map((value) => <MenuItem value={value}>{value}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
}

export default Pricing
