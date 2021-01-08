import {Header} from "./components/Header/index";
import Box from "@material-ui/core/Box";
import {AppDrawer} from "./components/Drawer";
import {useDispatch, useSelector} from "react-redux";
import {BaristaPageProducts} from "./modules/BaristaPage/BaristaPageProducts";
import Snackbar from '@material-ui/core/Snackbar';
import {hideSnackbar} from "./redux/actions/snackbarStatusActions";
const drawerWidth = 450;

export const App = () => {
    const dispatch = useDispatch();
    const drawerStatus = useSelector((state) => {return state.drawerStatus.isOpen})
    const snackbarStatus = useSelector(state => state.snackbarStatus);


    return (
        <>
            <Header />
            <Box component="main" className="mainWrap" pr={drawerStatus ? `${drawerWidth}px` : 0}>
                <Box py={6}>
                    <BaristaPageProducts />
                    <AppDrawer drawerWidth={drawerWidth}/>
                </Box>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                autoHideDuration={3000}
                onClose={() => dispatch(hideSnackbar())}
                open={snackbarStatus.isOpen}
                message={snackbarStatus.msg}
                />
            </Box>
        </>

  );
}

