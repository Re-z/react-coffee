import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";

export const AppDrawer = (props) => {
    const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})
    return (
        <>
            <Drawer
                className="baristaPageDrawer"
                anchor="right"
                open={drawerStatus}
                // onClose={() => closeDrawer()}
                variant="persistent"
            >
               <Box pt={10} px={2} width={`${props.drawerWidth}px`}>
                    <p>111</p>
               </Box>


            </Drawer>
        </>

    )
}