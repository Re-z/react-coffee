import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

import {formatDateToString} from '../../../utils/dateFormatters'
import {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import {OrdersFilters} from "../OrdersFilters";
import {ordersSortingConfig} from "../OrdersFilters/configs/ordersSortingConfig";
import {mapProductSize} from "../../../utils/productSizeMap";
import Typography from "@material-ui/core/Typography";
import {TablePagination} from "@material-ui/core";

const initialSort = ordersSortingConfig[0];
const rowsPerPageOptions = [5,10,15,20]

export const OrdersPageTable = (props) => {
   const [sortedOrders, setSortedOrders] = useState([]);
   const [isSortAscendant, setIsSortAscendant] = useState(true);
    const [tablePage, setTablePage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[1]);

   useEffect(() => {
       const initialySortedArr = initialSort.action(props.filteredOrders);
       //useReducer || useSetState (https://github.com/streamich/react-use/blob/master/docs/useSetState.md)
       setSortedOrders(initialySortedArr);
       setIsSortAscendant(true);
   }, [props.filteredOrders])


    const handleChangePage = (event, newPage) => {
        setTablePage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setTablePage(0);
    };

    return (
        <>
            <Box my={3}>
                <OrdersFilters
                    sortedOrders={sortedOrders}
                    setSortedOrders={setSortedOrders}
                    isSortAscendant={isSortAscendant}
                    setIsSortAscendant={setIsSortAscendant}
                    initialSort={initialSort}
                />
            </Box>
            {
                props.filteredOrders.length ?  (
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>#</strong></TableCell>
                                        <TableCell><strong>Name</strong> </TableCell>
                                        <TableCell><strong>Size</strong> </TableCell>
                                        <TableCell><strong>Date</strong> </TableCell>
                                        <TableCell><strong>Price, USD</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        sortedOrders
                                            .slice(tablePage * rowsPerPage, tablePage * rowsPerPage + rowsPerPage)
                                            .map((order,index) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    className={index % 2 === 0 ? 'tableRowOdd' : ''}
                                                >
                                                    <TableCell>{ index + 1 }</TableCell>
                                                    <TableCell>{ order.name }</TableCell>
                                                    <TableCell>{ mapProductSize(order.chosenSize.size) }</TableCell>
                                                    <TableCell>{ formatDateToString(order.orderTime) }</TableCell>
                                                    <TableCell>{ order.chosenSize.price }</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                            <TablePagination
                                labelRowsPerPage='Orders per page'
                                component="div"
                                count={sortedOrders.length}
                                rowsPerPage={rowsPerPage}
                                rowsPerPageOptions={rowsPerPageOptions}
                                page={tablePage}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </TableContainer>
                )
                : <Typography>No items</Typography>
            }

        </>
    )
}