import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BaristaDrawerOrderedProduct} from '../BaristaDrawerOrderedItem'
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {ordersSlice, postOrdersToDBThunk} from '../../../redux/slices/ordersSlice'
import {mapProductSize} from "../../../utils/productSizeMap";
import {drawerStatusSlice} from "../../../redux/slices/drawerStatusSlice";
import {snackbarSlice} from "../../../redux/slices/snackbarSlice";
import styles from './BaristaDrawer.module.scss'

export const BaristaDrawer = () => {
    const dispatch = useDispatch();
    const activeProduct = useSelector((state) => {return state.baristaActiveProduct.product});
    const [chosenSize, setChosenSize] = useState({});
    const [orderedProducts, setOrderedProducts] = useState([]);
    console.log(styles.coffeeImg)

    useEffect(() => {
        //set initial value for active product size
        if(activeProduct) {
            setChosenSize(activeProduct.sizes[0])
        }
    }, [activeProduct])

    const handleAddToOrder = (chosenSize) => {
        const newOrderedProduct = {
            name: activeProduct.name,
            chosenSize: chosenSize,
        }
        setOrderedProducts(prevState => {
            return [...prevState, newOrderedProduct]
        })
    }

    const calculateTotalPrice = () => {
        //why reduce doesnt work?
        let price = 0;
        orderedProducts.forEach(product => {
           price = price + product.chosenSize.price
       })
        return price;
    }
    const resetDrawer = () => {
        setOrderedProducts([]);
        dispatch(drawerStatusSlice.actions.hideDrawer());
    }
    const handleCancelOrder = () => {
        resetDrawer();
        dispatch(snackbarSlice.actions.showSnackbar('Order cancelled'))
    }

    const handleConfirmOrder = () => {
        const currentTime = Date.now()
        const orders = orderedProducts.map(product => {
            return {
                ...product,
                orderTime: currentTime
            }
        })
        dispatch(postOrdersToDBThunk(orders))
            .then(dispatch(ordersSlice.actions.setLastOrderId(currentTime)))
        resetDrawer()
    }

    return (
        <Box
            className="fullHeight"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box pt={10}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px={2}
                >
                    <Typography  variant="h5">Order</Typography>
                    <IconButton
                        color="inherit"
                        onClick={
                            () => dispatch(drawerStatusSlice.actions.hideDrawer())
                        }
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                    <Box px={2}>
                    {activeProduct && (
                        <Card>
                            <CardMedia
                                className={styles.coffeeImg}
                                image={activeProduct.img}
                                title={activeProduct.name}
                            />

                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2">
                                    {activeProduct.name}
                                </Typography>
                                <Box
                                    mt={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Typography>Size:</Typography>
                                    <Box>
                                        {
                                            activeProduct.sizes.map (size => {
                                                return (
                                                    <Button
                                                        key={size.size}
                                                        onClick={() => {setChosenSize(size)}}
                                                        size="small"
                                                        color="primary"
                                                        variant={chosenSize === size ? 'contained' : 'text'}
                                                    >
                                                        {mapProductSize(size.size) }
                                                    </Button>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                                <Box
                                    mt={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Typography>Price:</Typography>
                                    <Typography><strong>$ {chosenSize.price}</strong></Typography>
                                </Box>

                            </CardContent>
                            <CardActions>
                                <Button
                                    disabled={!chosenSize}
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => {handleAddToOrder(chosenSize)}}
                                >
                                    Add to order
                                </Button>
                            </CardActions>
                        </Card>
                    )}
                </Box>
            </Box>

            {
                orderedProducts.length !== 0 && (
                    <Box
                        mt={4}
                        className={styles.scrolableDiv}
                        px={2}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography variant="h6">Ordered items:</Typography>
                            <Typography><strong><i>Total: ${calculateTotalPrice()}</i></strong></Typography>
                        </Box>
                        {
                            orderedProducts.map((product,index) => {
                                return (
                                    <BaristaDrawerOrderedProduct
                                        key={index}
                                        product={product}
                                        isDividerShown={orderedProducts.length - 1 !== index}
                                    />
                                )
                            })
                        }
                </Box>

                )
            }

            {/*buttons*/}
            {
                orderedProducts.length !== 0 && (
                    <Box px={2} py={2} className="baristaDrawerBtns">
                        <Divider />
                        <Box
                            mt={2}
                            className=""
                            display="flex"
                            justifyContent="space-between">
                            <Button
                                className="width50"
                                color="primary"
                                size="large"
                                variant="contained"
                                onClick={() => handleConfirmOrder()}
                            >
                                Confirm order
                            </Button>
                            <Button
                                className="width50"
                                color="primary"
                                size="large"
                                onClick={() => handleCancelOrder()}
                            >
                                Cancel order
                            </Button>
                        </Box>
                    </Box>
                )
            }
            {/*end buttons*/}
        </Box>
    )
}