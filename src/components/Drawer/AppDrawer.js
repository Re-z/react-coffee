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
    const drawerPadding = 2;

    return (
            <Drawer
                className="baristaPageDrawer"
                anchor="right"
                open={drawerStatus}
                variant="persistent"
            >
               <Box

                   className="fullHeight"
                   width={`${props.drawerWidth}px`}
               >


                  <BaristaDrawer drawerPadding={drawerPadding}/>

               </Box>
            </Drawer>

    )
}