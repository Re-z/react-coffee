const sizes = {
    0: 'S',
    1: 'M',
    2: 'L',
    3: 'XL'
}

export const mapProductSize = (productSize) => {
    return sizes[productSize];
}