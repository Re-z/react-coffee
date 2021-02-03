import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {OrdersPageTable} from "../OrdersPageTable";
import {useEffect} from "react";
import {fetchOrdersThunk} from "../../../redux/slices/ordersSlice";
import {CircularProgress} from "@material-ui/core";
import {filteredOrdersSlice} from "../../../redux/slices/filteredOrdersSlice";

export const OrdersPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.items);
    const filteredOrders = useSelector(state => state.filteredOrders.items);
    const lastOrderId = useSelector(state => state.orders.lastOrderId)
    const isLoadingInProgress = useSelector(state => state.ordersPreloader)


    useEffect(() => {
        dispatch(fetchOrdersThunk());
    }, [dispatch, lastOrderId])

    //two use effects?

    useEffect(() => {
        dispatch(filteredOrdersSlice.actions.setFilteredOrders(orders))
    }, [dispatch, orders])

    return (
        <>
            <Typography paragraph variant="h4">Orders page</Typography>

            {
                isLoadingInProgress
                    ? <CircularProgress />
                    : <OrdersPageTable filteredOrders={filteredOrders}/>
            }

        </>
    )
}