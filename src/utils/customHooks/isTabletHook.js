import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const isTablet = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return !useMediaQuery(theme.breakpoints.up('md'));
}