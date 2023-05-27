import { Box, Grid } from '@mui/material'
import React from 'react'
import Nav from '../components/Nav'
import Notecard from '../components/Postcard'

function Newsfeed() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <Nav />
        </Grid>
        <Grid item xs={8}>
          {/* mood component insert */}
          <Grid container>
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