import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {ordersSorting} from './configs/ordersSortingConfig';
import {ordersAscendance} from "./configs/ordersAscendanceConfig";

const initialSort = ordersSorting[0];


export const OrdersFilters = (props) => {
    const [activeSort, setActiveSort] = useState(initialSort);
    const [isAscendant, setIsAscendant] = useState(true);

    useEffect(() => {
        props.setSortedOrders(initialSort.action(props.sortedOrders))
    }, [])

    const handleAscendance = (ascendance) => {
        if(isAscendant !== ascendance) {
            setIsAscendant(ascendance);
            props.setSortedOrders([...props.sortedOrders.reverse()])
        }
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
                <Typography>Sort by:</Typography>
                {
                    ordersSorting && ordersSorting.map(sort => {
                        return (
                            <Box ml={1} key={sort.name}>
                                <Button
                                    variant={activeSort === sort ? 'contained' : 'text'}
                                    color="primary"
                                    disableElevation
                                    onClick={() => {
                                        props.setSortedOrders(sort.action(props.sortedOrders));
                                        setActiveSort(sort);
                                        setIsAscendant(true)
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
                <Typography>Order:</Typography>
                    {
                        ordersAscendance && ordersAscendance.map(ascendance => {
                            return (
                                <Box ml={1}>
                                    <Button
                                        variant={ascendance.isAscendant === isAscendant ? 'contained' : 'text'}
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
    )
}