import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {NavLink} from "react-router-dom";
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <AppBar
            position="fixed"
            className={styles.mainHeader}
        >
            <Toolbar>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <FreeBreakfastOutlinedIcon />
                        <Box ml={2}>
                            <NavLink activeClassName={styles.navLinkActive} exact to="/">
                                <Typography
                                    component="span"
                                    variant="h6"
                                >
                                    Barista page
                                </Typography>
                            </NavLink>
                        </Box>

                        <Box ml={2}>
                            <NavLink activeClassName={styles.navLinkActive} exact to="/orders">
                                <Typography
                                    component="span"
                                    variant="h6">
                                    Orders page
                                </Typography>
                            </NavLink>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}