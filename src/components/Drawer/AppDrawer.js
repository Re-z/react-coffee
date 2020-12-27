import React, {useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

export const AppDrawer = () => {
    const [drawerStatus, setDrawerStatus ]= useState(false);
    const closeDrawer = () => {
        setDrawerStatus(false);
    }
    return (
        <>
            <Drawer
                className="baristaPageDrawer"
                anchor="right"
                open={drawerStatus}
                // onClose={() => closeDrawer()}
                variant="persistent"
            >
               <Box pt={10} px={2}>
                    <p>111</p>
               </Box>


            </Drawer>
        </>

    )
}