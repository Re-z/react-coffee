import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {ordersSortingConfig} from './configs/ordersSortingConfig';
import {ordersAscendance} from "./configs/ordersAscendanceConfig";
import {OrdersFiltersOptions} from "./OrdersFiltersOptions";

export const OrdersFilters = (props) => {
    const [activeSort, setActiveSort] = useState(props.initialSort);

    const handleAscendance = (ascendance) => {
        if(props.isSortAscendant !== ascendance) {
            props.setIsSortAscendant(ascendance);
            props.setSortedOrders([...props.sortedOrders.reverse()])
        }
    }

    return (
        <>
            <Box display="flex"
                 alignItems="center"
                 justifyContent="space-between"
            >
                <Box display="flex" alignItems="center">
                    <Typography><strong>Sort by:</strong></Typography>
                    {
                        ordersSortingConfig && ordersSortingConfig.map(sort => {
                            return (
                                <Box ml={1} key={sort.name}>
                                    <Button
                                        size="small"
                                        variant={activeSort === sort ? 'contained' : 'text'}
                                        color="primary"
                                        disableElevation
                                        onClick={() => {
                                            props.setSortedOrders(sort.action(props.sortedOrders));
                                            setActiveSort(sort);
                                            props.setIsSortAscendant(true)
                                        }}
                                    >
                                        {sort.btnLabel}
                                    </Button>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography><strong>Order:</strong></Typography>
                        {
                            ordersAscendance && ordersAscendance.map(ascendance => {
                                return (
                                    <Box ml={1} key={ascendance.btnLabel}>
                                        <Button
                                            size="small"
                                            variant={ascendance.isAscendant === props.isSortAscendant ? 'contained' : 'text'}
                                            color="primary"
                                            disableElevation
                                            onClick={() => handleAscendance(ascendance.isAscendant)}
                                        >
                                            {ascendance.btnLabel}
                                        </Button>
                                    </Box>
                                )
                            })
                        }
                </Box>
            </Box>

            <OrdersFiltersOptions />
        </>

    )
}