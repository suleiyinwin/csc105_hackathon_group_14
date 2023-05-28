import { Box, CssBaseline } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router";
import SnackBarMessage from "../components/SnackBarMessage";
import GlobalContext from "../context/globalContext";

export default function Layout(){
    const [user, setUser] = useState();
    const [status, setStatus] = useState("");
    const generatekey = () => {
        return Math.random();
      };

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
                {status ? (
        <SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
      ) : null}
            </Box> 
        </GlobalContext.Provider>    
    )
   
}