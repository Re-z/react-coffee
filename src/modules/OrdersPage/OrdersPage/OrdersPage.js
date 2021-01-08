import Typography from "@material-ui/core/Typography";
import {useSelector} from "react-redux";
import {OrdersPageTable} from "../OrdersPageTable";

export const OrdersPage = () => {
    const orders = useSelector(state => state.orders.items);

    return (
        <>
            <Typography paragraph variant="h4">Orders page</Typography>
            {
                orders && <OrdersPageTable orders={orders}/>
            }

        </>
    )
}