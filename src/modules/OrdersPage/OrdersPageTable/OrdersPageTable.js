import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

import {formatDateToString} from '../../../utils/dateFormatters'
import {formatTextToUpperCase} from '../../../utils/textFormatters'


export const OrdersPageTable = (props) => {
   const orders = props.orders;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>#ID</strong></TableCell>
                        <TableCell><strong>Name</strong> </TableCell>
                        <TableCell><strong>Size</strong> </TableCell>
                        <TableCell><strong>Date</strong> </TableCell>
                        <TableCell><strong>Price, USD</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        orders.map((order,index) => {
                            return (
                                <TableRow
                                    key={index}
                                    className={index % 2 === 0 ? 'tableRowOdd' : ''}
                                >
                                    <TableCell>{ index + 1 }</TableCell>
                                    <TableCell>{ order.name }</TableCell>
                                    <TableCell>{ formatTextToUpperCase(order.chosenSize.size) }</TableCell>
                                    <TableCell>{ formatDateToString(order.orderTime) }</TableCell>
                                    <TableCell>{ order.chosenSize.price }</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}