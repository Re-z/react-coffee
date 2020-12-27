import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

export const BaristaPageCard = (props) => {
    const {img, name, text} = props.product
    return (
        <Grid item xs={2}>
            <Card >
            <CardActionArea>
                <CardMedia
                    className="coffeeImg"
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    )
}

