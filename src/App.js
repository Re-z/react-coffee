import {Header} from "./components/Header/index";
import Box from "@material-ui/core/Box";
import {AppDrawer} from "./components/Drawer";
import {useDispatch, useSelector} from "react-redux";
import {BaristaPage} from "./modules/BaristaPage/BaristaPage";
import Snackbar from '@material-ui/core/Snackbar';
import  {Route, Switch} from 'react-router-dom'
import {OrdersPage} from "./modules/OrdersPage/OrdersPage";
import {snackbarSlice} from "./redux/slices/snackbarSlice";
import {isTablet} from "./utils/customHooks/isTabletHook";

export const App = () => {
    const dispatch = useDispatch();
    const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})
    const snackbarStatus = useSelector(state => state.snackbarSlice);

    const drawerWidth = isTablet() ? 400 : 450;


    return (
        <Box pt={7}>
            <Header />
            <Box
                component="main"
                className="mainWrap"
                pr={drawerStatus ? `${drawerWidth}px` : 0}
            >
                <Box py={6} px={2}>
                    <Switch>
                        <Route exact path="/" component={BaristaPage} />
                        <Route exact path="/orders" component={OrdersPage} />
                    </Switch>

                    <AppDrawer drawerWidth={drawerWidth}/>
                </Box>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                autoHideDuration={3000}
                onClose={() => dispatch(snackbarSlice.actions.hideSnackbar())}
                open={snackbarStatus.isOpen}
                message={snackbarStatus.msg}
                />
            </Box>
        </Box>

  );
}

