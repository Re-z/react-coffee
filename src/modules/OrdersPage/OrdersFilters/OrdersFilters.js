import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {ordersFilters} from '../../../redux/ordersFiltersConfig';

export const OrdersFilters = (props) => {

    const sortBySize = () => {
        const sortedArray = ordersFilters[0].action(props.sortedOrders);
        console.log(sortedArray, 'sorted')
        // props.setSortedOrders(sortedArray);
    }

    return (
        <Box display="flex" alignItems="center">
            <Typography>Sort by:</Typography>
            <Box ml={1}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => sortBySize(props.setSortedOrders)}
                >
                   Size
                </Button>
            </Box>
        </Box>
    )
}