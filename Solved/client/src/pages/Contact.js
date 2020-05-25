import React from "react";


import { Box, Grid, Paper } from "@material-ui/core";


function Stocks(props){
    return (
    <>
    <Box>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Paper elevation={3}/>
        </Grid>
    </Grid>
    </Box>    
    </>
    )
}

export default Stocks;