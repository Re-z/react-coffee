import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {filteredOrdersSlice} from "../../../../redux/reduxToolkit/filteredOrdersSlice";

const filtersConstants = {
    ALL_ITEMS: 'ALL_ITEMS'
}

export const selectStyles = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
    },
    getContentAnchorEl: null,
};

export const OrdersFiltersOptions = () => {
    const dispatch = useDispatch();

    const [nameFilter, setNameFilter] = useState(filtersConstants.ALL_ITEMS);
    const orders = useSelector(state => state.orders.items);
    const uniqueOrdersNames = Array.from(new Set(orders.map(order => {
        return order.name; //extract unique values from array and convert back to array
    })))

    const handleNameFilterChange = (ev) => {
        const chosenName = ev.target.value;
        setNameFilter(chosenName);

        if(chosenName === filtersConstants.ALL_ITEMS) {
            dispatch(filteredOrdersSlice.actions.setFilteredOrders(orders));
            return;
        }

        const filteredArr = orders.filter(order => {
           return order.name === chosenName
       })
        dispatch(filteredOrdersSlice.actions.setFilteredOrders(filteredArr));
    }

    return (
        <Box my={3}>
            <Box display="flex" alignItems="center">
                <Typography><strong>Filter by:</strong></Typography>

                {/*start filter el*/}
                <Box ml={1}>
                    <FormControl size="small" variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
                        <Select
                            value={nameFilter}
                            onChange={handleNameFilterChange}
                            label="Name"
                            MenuProps={selectStyles}
                        >
                            <MenuItem value={filtersConstants.ALL_ITEMS}>All</MenuItem>
                            {
                                uniqueOrdersNames && uniqueOrdersNames.map((orderName, index) => {
                                    return (
                                        <MenuItem key={index} value={orderName}>{orderName}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
                {/*end filter el*/}

            </Box>
        </Box>
    )
}