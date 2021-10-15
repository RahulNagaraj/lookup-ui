import React from "react";
import {
    Box,
    Button,
    Card, CardActionArea, CardActions, CardContent,
    CardMedia,
    Container, Divider,
    Grid,
    Typography
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { red, grey } from '@mui/material/colors';

const useStyles = makeStyles({
    button: {
        '&:hover': {
            backgroundColor: red[500],
        },
        '&:focus': {
            backgroundColor: red[700],
        }
    }})

const filters = [
    {title: 'Balcony', key: 'balcony'},
    {title: 'Bed', key: 'bed'},
    {title: 'Wardrobe', key: 'wardrobe'},
    {title: 'Door', key: 'door'},
    {title: 'Window', key: 'window'}
]

const services = [
    {
        title: 'Clothes hanger installation',
        description: [
            {title: 'Includes roof drilling'},
            {title: 'Price does not include spare part costs'}
        ],
        type: 'balcony'
    },
    {
        title: 'Clothes hanger installation (Wall/Door)',
        description: [
            {title: 'Includes wall mount installation only'},
            {title: 'Excludes roof drilling'},
            {title: 'Price does not include spare part costs'}
        ],
        type: 'balcony'
    },
    {
        title: 'Clothes hanger installation (Wall/Door)',
        description: [
            {title: 'Includes wall mount installation only'},
            {title: 'Excludes roof drilling'},
            {title: 'Price does not include spare part costs'}
        ],
        type: 'window'
    },
    {
        title: 'Clothes hanger installation (Wall/Door)',
        description: [
            {title: 'Includes wall mount installation only'},
            {title: 'Excludes roof drilling'},
            {title: 'Price does not include spare part costs'}
        ],
        type: 'door'
    },
]

const Details = () => {
    const classes = useStyles()
    const [filteredServices, setFilteredServices] = React.useState(services);
    const handleFilter = (key) => {
        const filteredData = services.filter(s => s.type === key);
        setFilteredServices(filteredData);
    }

    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <Box display="flex" flexDirection="column" justifyContent={"flex-end"} sx={{textAlign: 'right', display: 'block'}}>
                        {filters.map(filter => (
                            <Button key={filter.key}
                                    variant={"contained"}
                                    sx={{m: 1, backgroundColor: grey[900], color: "#FFF"}}
                                    onClick={() => handleFilter(filter.key)}
                                    className={classes.button}
                            >
                                <Typography variant={"caption"}>{filter.title}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Grid>

                <Grid item sm={10}>
                    <Box>
                        <Grid container spacing={2}>
                            {filteredServices.map(service => (

                                <Grid item sm={4}>
                                    <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {service.title}
                                                </Typography>
                                                <Divider orientation="horizontal" />
                                                {service.description.map(description => (
                                                    <li style={{fontSize: '14px'}}>{description.title}</li>
                                                ))}
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Add to cart
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Details;