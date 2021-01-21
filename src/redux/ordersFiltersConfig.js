import {reduxConstants} from './constants';


const sortBySize = (orders) => {
    function compare(a, b) {
        console.log('b', b.chosenSize.size)
        if (a.chosenSize.size > b.chosenSize.size) {
            return -1;
        }
        if (a.chosenSize.size < b.chosenSize.size) {
            return 1;
        }
        return 0;
    }

    console.log(orders, 'initial')
    return (orders.sort(compare))
}

export const ordersFilters = [
    {
        name: reduxConstants.SORT_ORDERS_BY_SIZE,
        btnLabel: 'Size',
        action: sortBySize
    }
]