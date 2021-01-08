import Box from "@material-ui/core/Box";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export const BaristaDrawerOrderedProduct = (props) => {
    return (
       <Box mt={2}>
           <Box
               display="flex"
               alignItems="center"
               justifyContent="space-between"
           >
               <Typography color="textSecondary">{props.product.name}</Typography>
               <Typography
                   className="textUppercase"
                   color="textSecondary"
               >
                   {props.product.chosenSize.size}
               </Typography>
           </Box>
           <Box
               mb={1}
               display="flex"
               justifyContent="flex-end"
           >
               <Typography>$ {props.product.chosenSize.price}</Typography>
           </Box>

           {
               props.isDividerShown && (
                   <Divider/>
               )
           }

       </Box>
    )
}