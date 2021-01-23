import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {BaristaPageCard} from "../BaristaPageCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../../redux/actions/productsAction";


export const BaristaPage = () => {
    const products = useSelector(state => state.products.items)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


return (
    <>
        <Typography paragraph variant="h4">Barista page</Typography>
        <Grid container spacing={2}>
            {
                products.map(product => {
                    return (
                        <BaristaPageCard
                            key={product.id}
                            product={product}
                        />
                    )
                })
            }
        </Grid>
    </>
)
}