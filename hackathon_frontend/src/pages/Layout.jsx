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
            <Box sx={{
          minHeight: '100vh',
          background: 'linear-gradient(45deg,#97D8C4, #A0C4FF, #CAFFBF, #FDFFB6)',
          backgroundSize: '300% 300%',
          animation: 'gradient 5s ease infinite',
          $: {
            '@keyframes gradient': {
              '0%': {
                backgroundPosition: '0% 50%',
              },
              '50%': {
                backgroundPosition: '100% 50%',
              },
              '100%': {
                backgroundPosition: '0% 50%',
              },
            },
          },
        }}>
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