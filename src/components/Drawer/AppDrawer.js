import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {hideDrawer} from "../../redux/actions/drawerStatusAction";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const AppDrawer = (props) => {
    const dispatch = useDispatch();
    const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})
    const activeProduct = useSelector((state) => {return state.baristaActiveProduct.product});

    return (
        <>
            <Drawer
                className="baristaPageDrawer"
                anchor="right"
                open={drawerStatus}
                variant="persistent"
            >
               <Box pt={10} px={2} width={`${props.drawerWidth}px`}>
                   <Box
                       display="flex"
                       justifyContent="space-between"
                       alignItems="center"
                   >
                       <Typography variant="h5">Order</Typography>
                       <IconButton
                           color="inherit"
                           onClick={() => dispatch(hideDrawer())}
                       >
                           <CloseIcon />
                       </IconButton>
                   </Box>

                    <Box>

                    </Box>
                   {activeProduct && (
                       // <Box width="100%">
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
                                           <Button color="primary" variant="contained" size="small">S</Button>
                                           <Button size="small">M</Button>
                                           <Button size="small">L</Button>
                                           <Button size="small">XL</Button>
                                       </Box>
                                   </Box>
                                   <Box
                                       mt={2}
                                       display="flex"
                                       justifyContent="space-between"
                                       alignItems="center">
                                       <Typography>Price:</Typography>
                                       <Typography><strong>$20</strong></Typography>

                                   </Box>

                               </CardContent>
                               <CardActions>
                                   <Button variant="contained" color="primary">
                                       Proceed order
                                   </Button>
                                   <Button
                                       onClick={() => dispatch(hideDrawer())}
                                       color="primary">
                                       Cancel
                                   </Button>

                               </CardActions>
                           </Card>
                       // </Box>

                   )}



               </Box>


            </Drawer>
        </>

    )
}