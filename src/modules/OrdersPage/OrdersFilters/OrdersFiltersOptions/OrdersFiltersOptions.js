import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export const OrdersFiltersOptions = () => {
    const [age, setAge] = useState(0)
    const handleChange = () => {
        alert(1)
    }

    return (
        <Box my={3}>
            <Box display="flex" alignItems="center">
                <Typography><strong>Filter by:</strong></Typography>
                {/*filter el*/}
                <Box ml={1}>
                    <FormControl  variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/*end filter el*/}
            </Box>
        </Box>
    )
}