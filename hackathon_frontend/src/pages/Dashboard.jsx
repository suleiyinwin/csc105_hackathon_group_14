import React from "react";
import { Grid, Box } from "@mui/material";
import Nav from "../components/Nav";
import Mood from "../components/Mood";
import Postcard from "../components/Postcard";
import PostCreateModal from "../components/PostCreateModal";
import GlobalContext from "../context/globalContext";
import Cookies from "js-cookie";
import Axios from "../components/AxiosInstance";
import { useEffect, useState, useContext } from "react";

function Dashboard() {
  return (
    <Grid container>
      <Grid item sm={2.5} display={{ sm: "block", xs: "none" }}>
        <Nav />
      </Grid>
      <Grid item sm={9.5} xs={12} display={{xs:"block"}}>
            <Box sx={{ height: "40%", mb: 2 }}>
          <Mood />
        </Box>
        {/* map notecard */}
        <Postcard />
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}

export default Dashboard;

