import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

export const Header = () => {
    return (
        <AppBar position="static" className="mainHeader">
            <Toolbar>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography component="span" variant="h6" >React coffee</Typography>
                    </Box>
                    <Button color="inherit">Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}