import * as React from "react";
import "../css/global.scss";
import "../css/pricing.scss";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";

class Pricing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            activeCategory: {
                "id": "01vBxgNLJxQniupaD9nCyT",
                "name": "ZŁOM STALOWY"
            }
        }
    }

    render() {
        return <div className={"pricing"}>
            <FormControl variant="outlined" style={{"marginTop": "20px"}}>
                <InputLabel id="demo-simple-select-outlined-label">Kategoria</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.activeCategory.name}
                    onChange={(e) => {
                        let category = this.props.pricingCategories.find(x => x.name == e.target.value)
                        this.setState({activeCategory: {
                            id: category.id,
                            name: category.name
                        }})
                    }}
                    label="Kategoria"
                    className={"category-select"}
                >
                    {this.props.pricingCategories.map((value) => <MenuItem value={value.name} id={value.id}>{value.name}</MenuItem>)}
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
                    {this.props.pricingItems.filter(x => x.category.sys.id === this.state.activeCategory.id).map((value) =>
                        <Grid container className={"pricing-table-row"}>
                            <Grid item xs={6} className={"pricing-table-item"}>
                                <span>{value.name}</span>
                            </Grid>
                            <Grid item xs={6} className={"pricing-table-item"}>
                                <span>{value.price} zł</span>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    }
}

export default Pricing
