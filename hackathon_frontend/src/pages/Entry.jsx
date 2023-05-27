import { Box, Toolbar, Grid, Typography, Stack, Button } from '@mui/material'
import React,{ useContext, useState } from 'react';
import Login from '../components/Login';
import GlobalContext from '../context/globalContext';

function Entry() {
  const {user, setUser} = useContext(GlobalContext);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpen = () => setOpenLoginModal(true);

  return (
    <Box>
      <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: "sticky",
        zIndex: 10,
        // marginBottom: "8px",
        padding: "16px 5%",
        backgroundColor: "#023047",
        borderBottom: 1, borderColor: "#FB8500"
      }}

    >
      <Box sx={{ flexGrow: 1 }}>
        <img src="./assets/spout.svg" />
      </Box>
      
      {user ? (
          <Box sx={{
          backgroundColor: '#ffffff',
          color:'#000000',
          padding: '6px 18px',
          borderRadius: 12,
          border: '1px solid #ffffff',
          cursor: 'pointer',
          "&:hover": {
              //you want this to be the same as the backgroundColor above
              backgroundColor: "#ffffff",
            },
        }}>
          <CustomButton text="Log out"  handle={logout} />
          </Box>
      ) : (
        <Box sx={{
          backgroundColor: '#ffffff',
          color:'#000000',
          padding: '6px 18px',
          borderRadius: 12,
          border: '1px solid #ffffff',
          cursor: 'pointer',
          "&:hover": {
              //you want this to be the same as the backgroundColor above
              backgroundColor: "#ffffff",
            },
        }}>
          <Button  onClick={handleOpen} >
            Login
          </Button>
          <Login handleOpen={handleOpen} open={openLoginModal} setOpen={setOpenLoginModal}/>
        </Box>  
      )}
    </Stack>
      <Grid container>
          <Grid item md={7} sm={12} xs={12}>
            <Typography variant="h3">Change this text!!</Typography>
            <br />
            <Typography variant="h6">
              I stay up through the night; because that is when the moon and I have our conversations.<br/>
              I tell her about how I drown in the sparkle of your brown eyes and she tells me about how the makes even the darkest parts of__ her shine.
            </Typography>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
            <img
              style={{ padding: "0 0 0 15%" }}
              src="./assets/" 
              alt='image'
            />
          </Grid>
        </Grid>
    </Box>
  )
}

export default Entry