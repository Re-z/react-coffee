import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {hideDrawer} from "../../redux/actions/drawerStatusAction";
import {BaristaDrawer} from "../../modules/BaristaPage/BaristaDrawer";

export const AppDrawer = (props) => {
    const dispatch = useDispatch();
    const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})


    return (
            <Drawer
                className="baristaPageDrawer"
                anchor="right"
                open={drawerStatus}
                variant="persistent"
            >
               <Box
                   pt={10}
                   pb={5}
                   px={2}
                   width={`${props.drawerWidth}px`}
               >
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

                  <BaristaDrawer />

               </Box>
            </Drawer>

    )
}