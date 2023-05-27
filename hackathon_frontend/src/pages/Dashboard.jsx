import React from 'react'
import { Grid } from '@mui/material'
import Nav from '../components/Nav'
import Mood from '../components/Mood'
function Dashboard() {
  return (
    <Grid container component='main' sx={{height:'100vh'}}>
    <Grid item xs={2} display={{ sm:"block" }}>
       <Nav/>
    </Grid>
    <Grid item xs={10} display={{ xs: "block" }}>
    <Mood/>
    </Grid>
   </Grid> 
  )
}

export default Dashboard