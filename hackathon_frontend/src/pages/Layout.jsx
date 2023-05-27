import { Box, CssBaseline } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router";
import GlobalContext from "../context/globalContext";

export default function Layout(){
    const [user, setUser] = useState();
    const [status, setStatus] = useState("");

    const globalContextValue = useMemo(()=>{
        return {
          user,
          status,
          setUser,
          setStatus,  
        };
    },[user]);

    return(
        <GlobalContext.Provider value={globalContextValue}>
            <Box>
                <CssBaseline>
                <Outlet/>
                </CssBaseline>
                
            </Box> 
        </GlobalContext.Provider>    
    )
   
}