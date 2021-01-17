import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {OrdersPageTable} from "../OrdersPageTable";
import {useEffect} from "react";
import {getOrdersFromDB} from "../../../redux/actions/ordersAction";

export const OrdersPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.items);

    useEffect(() => {
        !orders.length && dispatch(getOrdersFromDB());
    }, [])

    return (
        <>
            <Typography paragraph variant="h4">Orders page</Typography>
            {
                orders.length
                    ? <OrdersPageTable orders={orders}/>
                    : <Typography>No ordered items</Typography>
            }

        </>
    )
}