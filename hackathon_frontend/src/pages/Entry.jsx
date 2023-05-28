import { Box, Toolbar, Grid, Typography, Stack, Button } from '@mui/material'
import React,{ useContext, useState } from 'react';
import Login from '../components/Login';
import GlobalContext from '../context/globalContext';

function Entry() {
  const {user, setUser} = useContext(GlobalContext);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpen = () => setOpenLoginModal(true);

  return (
    // <Box>
    //   <Stack
    //   direction="row"
    //   alignItems="center"
    //   justifyContent="flex-end"
    //   spacing={2}
    //   sx={{
    //     position: "sticky",
    //     zIndex: 10,
    //     // marginBottom: "8px",
    //     padding: "11px 5%",
    //     // backgroundColor: "#023047",
    //     // borderBottom: 1, borderColor: "#FB8500",
    //     padding: "10px 2%",
    //     backgroundColor: "#4059AD",
    //     // borderBottom: 1

    //   }}

    // >
    //   <Box sx={{ flexGrow: 1 }}>
    //     <img src="./assets/spout.svg" style={{width:'10%'}} />
    //   </Box>
    //     <Box sx={{
    //       backgroundColor: '#ffffff',
    //       color:'#000000',
    //       padding: '6px 18px',
    //       borderRadius: 12,
    //       border: '1px solid ',
    //       cursor: 'pointer',
    //       "&:hover": {
    //           //you want this to be the same as the backgroundColor above
    //           backgroundColor: "#ffffff",
    //         },
    //     }}>
    //       <Button  onClick={handleOpen} >
    //         Login
    //       </Button>
    //       <Login handleOpen={handleOpen} open={openLoginModal} setOpen={setOpenLoginModal}/>
    //     </Box>  
    // </Stack>
    //   <Grid container>
    //       <Grid item md={7} sm={12} xs={12}>
    //         <Typography variant="h3" sx={{fontFamily:'Roboto'}}>Welcome Back!</Typography>
    //         <br />
    //         <Typography variant="h6">
    //           I stay up through the night; because that is when the moon and I have our conversations.<br/>
    //           I tell her about how I drown in the sparkle of your brown eyes and she tells me about how the makes even the darkest parts of__ her shine.
    //         </Typography>
    //       </Grid>
    //       <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
    //         <img
    //           style={{ padding: "0 0 0 15%" }}
    //           src="./assets/" 
    //           alt='image'
    //         />
    //       </Grid>
    //     </Grid>
    // </Box>
    <Box style={{background:"#4059ad"}}>
      <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: "sticky",
        zIndex: 10,
        // marginBottom: "8px",
        padding: "11px 5%",
        // backgroundColor: "#023047",
        borderBottom: 1, borderColor: "#97d8c4",
        padding: "10px 2%",
        backgroundColor: "#4059AD",
        // borderBottom: 1

      }}

    >
      <Box sx={{ flexGrow: 1 }}>
        <img src="./assets/spout.svg" style={{width:'100px'}} />
      </Box>
        <Box sx={{
          backgroundColor: '#ffffff',
          color:'#000000',
          padding: '6px 18px',
          borderRadius: 12,
          // border: '1px solid ',
          cursor: 'pointer',
          "&:hover": {
              //you want this to be the same as the backgroundColor above
              backgroundColor: "#ffffff",
            },
        }}>
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
        }}  onClick={handleOpen} >
            Login
          </Box>
          <Login handleOpen={handleOpen} open={openLoginModal} setOpen={setOpenLoginModal}/>
        </Box>  
    </Stack>
      <Box style={{padding: "2% 15% 0 15%"}}>
          <Grid container >
            <Grid item xs={12} >
              <Box sx={{height:"50px", background:"#1D337D"}}>
                <Typography sx={{textAlign:"center",color:"#C0CFFF",padding:'12px'}}>
                  CHERISH THE MOMENT OF HAPPINESS
                </Typography></Box>
                <img src='../assets/fo.png' style={{width:"60%",margin:"5% 0 0 20%"}}/>
                <img src='../assets/entry.png' style={{width:"50%",margin:"5% 0 5% 25%"}}/>
            </Grid>
          </Grid>
      </Box>
      <Box style={{background:"#1A2F77", padding:"2% 15%"}}>
      <Grid container>
          <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
            <img
              style={{ padding: "0 0 0 15%",width:"60%" }}
              src="../assets/write2.png"
            />
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <br/>
            <Typography variant="h3" style={{color:'#ffffff'}}>What today?</Typography>
            <br />
            <Typography variant="h6" style={{color:'#ffffff'}}>
              I stay up through the night; because that is when the moon and I have our conversations.<br/>
              I tell her about how I drown in the sparkle of your brown eyes and she tells me about how the makes__ even the darkest parts of__ her shine.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Entry
