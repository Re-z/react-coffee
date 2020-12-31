import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {hideDrawer} from "../../../redux/actions/drawerStatusAction";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BaristaDrawerOrderedProduct} from '../BaristaDrawerOrderedItem'

export const BaristaDrawer = () => {
    const dispatch = useDispatch();
    const activeProduct = useSelector((state) => {return state.baristaActiveProduct.product});
    const [chosenSize, setChosenSize] = useState({});
    const [orderedProducts, setOrderedProducts] = useState([])

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
            let a = 0;
            orderedProducts.forEach(product => {
               a = a + product.chosenSize.price
           })
            return a;

    }

    return (
        <>
            {activeProduct && (
                <Card>
                    <CardMedia
                        className="coffeeImg, coffeeImg_drawer"
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
                            <Typography>Choose size:</Typography>
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
                                                {size.size}
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
            {
                orderedProducts.length !== 0 && (
                    <Box mt={4}>
                        <Typography variant="h6">Ordered items:</Typography>
                        {
                            orderedProducts.map((product,index) => {
                                return (
                                    <BaristaDrawerOrderedProduct
                                        key={index}
                                        product={product}
                                    />
                                )
                            })
                        }
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            mt={2}
                        >
                            <Typography>
                                <strong><i>Total: ${calculateTotalPrice()}</i></strong>
                            </Typography>
                        </Box>
                        <Box mt={5} display="flex" justifyContent="space-between">
                            <Button
                                className="width50"
                                color="primary"
                                size="large"
                                variant="contained"
                            >
                                Confirm order
                            </Button>
                            <Button
                                className="width50"
                                color="primary"
                                size="large"
                                // variant="contained"
                            >
                                Cancel order
                            </Button>
                        </Box>
                    </Box>

                )
            }
        </>
    )
}