import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";

export default Stocks;
function Nav() {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
    </Grid>
    </>
  );
}

export default Nav;
