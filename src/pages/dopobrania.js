import * as React from "react";
import Layout from "../components/Layout";

import '../css/downloads.scss';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";

//ochrona srodowiska
import ochronaImg from "../downloads/ochrona-srodowiska-zlomraj.jpg";
import ochronaPdf from "../downloads/ochrona-srodowiska-zlomraj.pdf";

class PricingPage extends React.Component {

    render() {
        let files = [
            {
                'name': 'Ochrona środowiska',
                'desc': '',
                'download_url': ochronaPdf,
                'image_url': ochronaImg
            },
            {
                'name': 'Decyzje Ochrony środowiska',
                'desc': 'Decyzje z Ochrony Środowiska zezwalające na zbieranie transpotr i magazynowanie surowców wtórnych i złomu.',
                'download_url': 'url',
                'image_url': 'http://zlomraj.pl/images/ochrona%20środowiska%20dok.jpg?crc=3961193440'
            }
        ]

        return <Layout>
            <div className={"container"} style={{'minHeight': 'calc(100vh - 650px)'}}>
                <h2>Pliki do pobrania</h2>
                <div className={"files"}>
                    <Grid container spacing={3}>
                    {files.map((file) => {
                        return <Grid item xs={4}>
                            <Card style={{"backgroundColor": "#424242", "color": "white"}}>
                                <a href={ochronaPdf} target={"_blank"} style={{"color": "white", "textDecoration": "none"}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={file.name}
                                            height="240"
                                            image={file.image_url}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align={"left"}>
                                                {file.name}
                                            </Typography>
                                            {file.desc ? <Typography variant="body2" component="p">
                                                {file.desc}
                                            </Typography> : ''}
                                        </CardContent>
                                    </CardActionArea>
                                </a>
                                <CardActions>
                                    <a href={ochronaPdf} download>
                                        <Button size="small" color="primary" style={{"color": "white"}}>
                                            Pobierz
                                        </Button>
                                    </a>
                                    <a href={ochronaPdf} target={"_blank"}>
                                        <Button size="small" color="primary" style={{"color": "white"}}>
                                            Wyświetl
                                        </Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Grid>
                    })}
                    </Grid>
                </div>
            </div>
        </Layout>
    }
}

export default PricingPage;
