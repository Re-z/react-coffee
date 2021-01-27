import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {useDispatch} from "react-redux";
import {setBaristaActiveProduct} from "../../../redux/actions/baristaActiveProductAction";
import {showDrawer} from "../../../redux/actions/drawerStatusAction";
import {drawerStatusSlice} from "../../../redux/reduxToolkit/drawerStatusSlice";


export const BaristaPageCard = (props) => {
    const dispatch = useDispatch();
    const handleCardClick = () => {
        dispatch(setBaristaActiveProduct(props.product));
        dispatch(drawerStatusSlice.actions.showDrawer());
    }

    return (
        <Grid item xs={2}>
            <Card onClick={() => handleCardClick()}>
                <CardActionArea>
                    <CardMedia
                        className="coffeeImg"
                        image={props.product.img}
                        title={props.product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.product.text}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

