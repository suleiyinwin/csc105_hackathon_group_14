import React from 'react'
import { Grid, Box } from '@mui/material'
import Nav from '../components/Nav'
import Mood from '../components/Mood'
import Postcard from '../components/Postcard'
function Dashboard() {
  return (
    <Grid container>
    <Grid item xs={3} display={{ sm:"block" }}>
       <Nav/>
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
  )
}

export default Dashboard