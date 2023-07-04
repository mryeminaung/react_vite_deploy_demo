import {
    Typography,
    Button,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@mui/material";

const MuiCard = ({ imgUrl, title }) => {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={200}
                    image={imgUrl}
                    alt="san kyi tar par"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere necessitatibus eos doloribus, ducimus esse
                        alias?
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="text" size="small">
                    Share
                </Button>
                <Button variant="text" size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default MuiCard;
