import { Box, Grid } from '@mui/material'
import React from 'react'
import Nav from '../components/Nav'
import Notecard from '../components/Postcard'
import Mood from '../components/Mood'
function Newsfeed() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={2} display={{ sm:"block" }}>
          <Nav />
        </Grid>
        <Grid item xs={10} display={{ xs: "block" }}>
        <Box sx={{height:'70%'}}>
            <Mood/>
        </Box>
          <Grid container >
            <Grid item xs={12}>
              {/* map notecard */}
              <Notecard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Newsfeed