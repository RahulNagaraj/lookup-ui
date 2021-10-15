import React from "react";
import {alpha, styled, ThemeProvider} from '@mui/material/styles';
import {
    BottomNavigation, BottomNavigationAction,
    Box, Card, CardActionArea, CardContent, CardMedia,
    Container, createTheme,
    FormControl,
    Grid, IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {blueGrey} from "@mui/material/colors";
import {useHistory} from "react-router-dom";

const location = [
    {
        value: 'Chicago',
    },
    {
        value: 'New York',
    },
    {
        value: 'San Fransisco',
    },
    {
        value: 'Seatle',
    },
];

const services = [
    {
        name: 'Electricians',
        key: 'electricians'
    },
    {
        name: 'Plumbers',
        key: 'plumbers'
    },
    {
        name: 'Carpenters',
        key: 'carpenters'
    },
    {
        name: 'Painters',
        key: 'painters'
    },
    {
        name: 'Appliance Repair',
        key: 'applicanceRepair'
    },
    {
        name: 'Pest Control',
        key: 'pestControl'
    },
    {
        name: 'Personal Chefs',
        key: 'personalChefs'
    }
];

const offers = [
    {
        title: 'Kitchen Cleaning',
        offer: 'Upto $50 off'
    },
    {
        title: 'Pest Control',
        offer: 'Flat $50 off'
    },
    {
        title: 'Appliance Repair',
        offer: 'Starts at $99'
    }
];

const trending = [
    {
        name: 'Air Conditioner',
        type: 'product',
    },
    {
        name: 'Plumbing',
        type: 'services',
    },
    {
        name: 'Electrical',
        type: 'services'
    }
];

const recommendedEvents = [
    {
        title: 'Marathon 21k',
        type: 'sports',
        location: 'Chicago'
    },
    {
        title: 'Haloween Night',
        type: 'social',
        location: 'New York',
    },
    {
        title: 'Christmas Carol',
        type: 'social',
        location: 'Seatle',
    },
    {
        title: 'Easter Day',
        type: 'social',
        location: 'San Fransisco'
    }
];


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '40vw',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        paddingTop: `calc(1em + ${theme.spacing(0)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const StyledPaper = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
}));

export default () => {
    let history = useHistory();

    const handleCardClick = () => {
        history.push("/detail");
    }

    return (
        <Container maxWidth="xl" disableGutters>
            <Box sx={{ bgcolor: blueGrey[100], height: '45vh'}}>
                <Box sx={{mx: 5, alignItems: 'center', mb: 5}} textAlign={"center"}>
                    <Typography variant="h1" component="div" gutterBottom>
                        Lookup
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <FormControl variant="standard" sx={{m: 1, minWidth: 200}}>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={"Chicago"}
                            label="Location"
                            onChange={() => {
                            }}
                        >
                            {location.map(loc => <MenuItem value={loc.value}>{loc.value}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for a product..."
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                </Box>
            </Box>
            <Box sx={{p: 5}}>
                <Container sx={{marginTop: 5, marginBottom: 5}}>
                    <Typography textAlign={"center"} gutterBottom variant="h4" component="div">
                        Services
                    </Typography>

                        <Grid container spacing={2}>
                            {services.map(service => (
                                <Grid item md={2} key={service.key}>
                                    <Card onClick={handleCardClick}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                width="100"
                                                image="/static/images/a.jpg"
                                                alt={service.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="body1" component="div">
                                                    {service.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                </Container>
            </Box>
            <Box sx={{bgcolor: blueGrey[200], p: 5}}>
                <Container sx={{my: 5}}>
                    <Typography textAlign={"center"} gutterBottom variant="h4" component="div">
                        Trending
                    </Typography>
                    <Grid container spacing={2}>
                        {trending.map((trend, index) => (
                            <Grid item md={4} key={index}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            width="100"
                                            image="/static/images/a.jpg"
                                            alt={""}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="body1" component="div">
                                                {trend.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box sx={{p: 5}}>
                <Container sx={{my: 5}}>
                    <Typography textAlign={"center"} gutterBottom variant="h4" component="div">
                        Best Offers
                    </Typography>
                    <Grid container spacing={2}>
                        {offers.map(offer => (
                            <Grid item md={4} key={offer.title}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            width="100"
                                            image="/static/images/a.jpg"
                                            alt={""}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="body1" component="div">
                                                {offer.title}
                                            </Typography>
                                            <Typography gutterBottom variant="caption" display="block">
                                                {offer.offer}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box sx={{bgcolor: blueGrey[200], p: 5}}>
                <Container sx={{my: 5}}>
                    <Typography textAlign={"center"} gutterBottom variant="h4" component="div">
                        Recommended Events
                    </Typography>
                    <Grid container spacing={2}>
                        {recommendedEvents.map(recommened => (
                            <Grid item md={3} key={recommened.title}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            width="100"
                                            image="/static/images/a.jpg"
                                            alt={""}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="body1" component="div">
                                                `{recommened.title} at {recommened.location}`
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Container sx={{mt: 10}}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        sx={{ bgcolor: blueGrey[50] }}
                        showLabels
                        value={""}
                        onChange={() => {}}
                    >
                        <Typography sx={{m: 2}} variant="body1" component="div">Made with ❤ using React</Typography>
                    </BottomNavigation>
                </Paper>
            </Container>
        </Container>
    );
}