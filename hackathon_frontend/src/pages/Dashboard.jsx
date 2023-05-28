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
    <Box>
      <Nav />
      
            <Box sx={{ height: "40%", mb: 2 }}>
          <Mood />
        
        {/* map notecard */}
        <Postcard />
    </Box>
    </Box>
        
    
  );
}

export default Dashboard;

