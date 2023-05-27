import { Box, Grid } from '@mui/material';
import React from 'react';
import Nav from '../components/Nav';
import Postcard from '../components/Postcard';
import Mood from '../components/Mood';

function Newsfeed() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={3} display={{ sm:"block" }}>
          <Nav />
        </Grid>
        <Grid item xs={9} display={{ xs: "block" }}>
        <Box sx={{ height:'40%', mb: 2, }}>
            <Mood/>
        </Box>
          <Grid container >
            <Grid item xs={12}>
              {/* map notecard */}
              <Postcard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Newsfeed