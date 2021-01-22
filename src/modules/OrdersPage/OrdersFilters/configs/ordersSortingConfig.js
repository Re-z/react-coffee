import {reduxConstants} from '../../../../redux/constants';


const sortBySize = (orders) => {
    const compare = (a, b) => {
        if (a.chosenSize.size > b.chosenSize.size) {
            return 1;
        }
        if (a.chosenSize.size < b.chosenSize.size) {
            return -1;
        }
        return 0;
    }
    return ([...orders.sort(compare)])
}

const sortByName = (orders) => {
    const compare = (a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    }

    return ([...orders.sort(compare)])
}

const sortByOrderTime = (orders) => {
    const compare = (a, b) => {
        if (a.orderTime < b.orderTime) {
            return -1;
        }
        if (a.orderTime > b.orderTime) {
            return 1;
        }
        return 0;
    }
    return [...orders.sort(compare)]
}
const sortByPrice = (orders) => {
    const compare = (a, b) => {
        if (a.chosenSize.price < b.chosenSize.price) {
            return -1;
        }
        if (a.chosenSize.price > b.chosenSize.price) {
            return 1;
        }
        return 0;
    }
    return [...orders.sort(compare)]
}


export const ordersSorting = [
    {
        name: reduxConstants.SORT_ORDERS_BY_TIME,
        btnLabel: 'Date',
        action: sortByOrderTime
    },
    {
        name: reduxConstants.SORT_ORDERS_BY_NAME,
        btnLabel: 'Name',
        action: sortByName
    },
    {
        name: reduxConstants.SORT_ORDERS_BY_SIZE,
        btnLabel: 'Size',
        action: sortBySize
    },
    {
        name: reduxConstants.SORT_ORDERS_BY_PRICE,
        btnLabel: 'Price',
        action: sortByPrice
    }
]