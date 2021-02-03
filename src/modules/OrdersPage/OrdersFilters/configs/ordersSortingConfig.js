
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
    return [...orders].sort(compare)
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
    return [...orders].sort(compare)
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
    return [...orders].sort(compare)
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


export const ordersSortingConfig = [
    {
        btnLabel: 'Date',
        action: sortByOrderTime
    },
    {
        btnLabel: 'Name',
        action: sortByName
    },
    {
        btnLabel: 'Size',
        action: sortBySize
    },
    {
        btnLabel: 'Price',
        action: sortByPrice
    }
]