import {Header} from "./components/Header/index";
import Box from "@material-ui/core/Box";
import {AppDrawer} from "./components/Drawer";
import {useDispatch, useSelector} from "react-redux";
import {hideDrawer, showDrawer} from "./redux/actions/drawerStatusAction";
import React from "react";
import {BaristaPageProducts} from "./modules/BaristaPage/BaristaPageProducts";

const drawerWidth = 450;

export const App = () => {
    const dispatch = useDispatch();
    const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})

    return (
        <>
            <Header />
            <Box component="main" className="mainWrap" pr={drawerStatus ? `${drawerWidth}px` : 0}>
                <Box py={6}>
                    <BaristaPageProducts />
                    <AppDrawer drawerWidth={drawerWidth}/>
                </Box>
                <p>Status: {drawerStatus ? 'visible' : 'hidden'}</p>
                <button onClick={() => dispatch(showDrawer())}>show</button>
                <button onClick={() => dispatch(hideDrawer())}>hide</button>
            </Box>
        </>

  );
}

