import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {OrdersPageTable} from "../OrdersPageTable";
import {useEffect} from "react";
import {getOrdersFromDB} from "../../../redux/actions/ordersAction";
import {setFilteredOrders} from "../../../redux/actions/filteredOrdersActions";

export const OrdersPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.items);
    const filteredOrders = useSelector(state => state.filteredOrders.items);
    const lastOrderId = useSelector(state => state.orders.lastOrderId)

    useEffect(() => {
        dispatch(getOrdersFromDB());
    }, [dispatch, lastOrderId])

    //two use effects?

    useEffect(() => {
        dispatch(setFilteredOrders(orders))
    }, [dispatch, orders])

    return (
        <>
            <Typography paragraph variant="h4">Orders page</Typography>
            {
                filteredOrders.length
                    ? <OrdersPageTable filteredOrders={filteredOrders}/>
                    : <Typography>No items</Typography>
            }

        </>
    )
}