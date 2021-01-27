import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";
import {BaristaDrawer} from "../../modules/BaristaPage/BaristaDrawer";

export const AppDrawer = (props) => {
    // const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})
    const drawerStatus = useSelector((state) => {return state.drawerStatus})

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

                  <BaristaDrawer />

               </Box>
            </Drawer>

    )
}