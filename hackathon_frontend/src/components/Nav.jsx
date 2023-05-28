import React, { useContext, useEffect } from "react";
import { Typography,Box,Drawer, Toolbar, Divider, Button,IconButton} from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate} from "react-router";
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GlobalContext from "../context/globalContext";
import Cookies from 'js-cookie';
import Axios from "./AxiosInstance";
const drawerWidth=300;

export default function Nav(props){
  const {user, setUser} = useContext(GlobalContext);
  
  console.log(user);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    useEffect(() => {
      // TODO: Implement get user
      const userToken = Cookies.get('UserToken');
      // console.log(userToken);
      if (userToken == null || userToken == "undefined") return;
      // 1. check if cookie is set
      // 2. send a request to server
      Axios.get("/me", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }).then((res) => {
        console.log(res.data.user.username);
        // 3. if success, set user information
        setUser({
          username: res.data.user.username,
          email: res.data.user.email,
        });
      });
    }, []);
    console.log(user);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    
    const textstyle={
        fontFamily: 'Robotos',
        fontWeight: 100,
        fontSize: 15,
        color:'#EFF2F1',
        padding: '6px',
        
      };
    const navigate=useNavigate();
    const [activeTab,setActiveTab]=useState('');
    const handleClick=(tab)=>{
        setActiveTab(tab);
        navigate(`/${tab}`);
    }
    const handleLogout=()=>{
        navigate('/login');
    }
    // const drawer=(
    //     <div >
    //          <Typography sx={{
    //         fontFamily:"Robotos",
    //         fontWeight: 300,
    //         fontSize: 30,
    //         color: '#EFF2F1',
    //         marginLeft: '13px'
    //     }}
    //     variant='h4'>
    //         Logo
    //     </Typography>
    //     <Toolbar/>
    //     <div style={{
    //         display:'flex',
    //         flexDirection:'column',
    //         alignItems:'center'
    //     }}>
    //         <img style={{paddingTop:'15px',
    //                     borderRadius:'50%',
    //                     margin:0,
    //                     width:'180px',
    //                     height:'175px'}} src="assets/test.JPG"></img>
    //        </div>
    //        <Typography sx={{
    //          paddingTop: '15px',
    //          fontSize: '1.2rem',
    //          fontWeight:'300',
    //          color: '#EFF2F1',
    //          textAlign:'center'
    //        }}>
    //         {user.username}
    //        </Typography>
    //        <nav position='static'>
    //         <Toolbar style={{padding:0,margin:0}}>
    //             <Box sx={{
    //                 flexGrow:1,
    //                 display:{xs:'none',sm:'block'},
    //                 ml:2.5, mt:0.5,
    //             }}>
    //             <ul style={{margin:0,
    //                         padding:0}}>
    //                     <li style={{listStyleType:'none'}}>
    //                     <Button sx={{alignItems:'center'}} onClick={() => handleClick('dashboard')}>
    //                     <DashboardIcon sx={{display: "flex", color: '#EFF2F1'}}/>
    //                     <Typography variant='h7'
    //                     component='div'
    //                         sx={textstyle}>
    //                         Dashboard
    //                      </Typography>
    //                     </Button>
    //                     </li>
    //                     <li style={{listStyleType:'none'}}>
    //                     <Button sx={{alignItems:'center'}} onClick={() => handleClick('newsfeed')}>
    //                     <FeedIcon sx={{display: "flex", color: '#EFF2F1'}}/>
    //                     <Typography variant='h7'
    //                     component='div'
    //                         sx={textstyle}>
    //                         Newsfeed
    //                      </Typography>
    //                     </Button>
    //                     </li>
    //                     <li style={{listStyleType:'none'}}>
    //                     <Button sx={{alignItems:'center'}} onClick={() => handleClick('login')}>
    //                     <LogoutIcon sx={{display: "flex", color: '#EFF2F1'}}/>
    //                     <Typography variant='h7'
    //                     component='div'
    //                         sx={textstyle}>
    //                         Logout
    //                      </Typography>
    //                     </Button>
    //                     </li>
    //             </ul>
                
    //             </Box>
    //         </Toolbar>
    //        </nav>
    //     </div>
    // );
    const container = window !== undefined ? () => window().document.body : undefined;
    return(
    <Box sx={{ display: 'flex' }}>
     
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          
          sx={{
            width: drawerWidth,
           
          }}
        >
          <div style={{
                width:drawerWidth,
                height: '100%',
                background: '#4059AD',
                }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <img style={{paddingTop:'15px',
                        borderRadius:'50%',
                        margin:0,
                        width:'180px',
                        height:'175px'}} src="assets/test.JPG"></img>
           </div>
           <Typography sx={{
             paddingTop: '15px',
             fontSize: '1.2rem',
             fontWeight:'300',
             color: '#EFF2F1',
             textAlign:'center'
           }}>
            {user !== undefined && user.username}
           </Typography>
           <nav position='static'>
            <Toolbar style={{padding:0,margin:0}}>
                <Box>
                <ul style={{margin:0,
                            padding:0}}>
                        <li style={{listStyleType:'none'}}>
                        <Button sx={{alignItems:'center'}} onClick={() => handleClick('newsfeed')}>
                        <DashboardIcon sx={{display: "flex", color: '#EFF2F1'}}/>
                        <Typography variant='h7'
                        component='div'
                            sx={textstyle}>
                            Dashboard
                         </Typography>
                        </Button>
                        </li>
                        <li style={{listStyleType:'none'}}>
                        <Button sx={{alignItems:'center'}} onClick={() => handleClick('newsfeed')}>
                        <FeedIcon sx={{display: "flex", color: '#EFF2F1'}}/>
                        <Typography variant='h7'
                        component='div'
                            sx={textstyle}>
                            Newsfeed
                         </Typography>
                        </Button>
                        </li>
                        <li style={{listStyleType:'none'}}>
                        <Button sx={{alignItems:'center'}} onClick={() => handleClick('newsfeed')}>
                        <LogoutIcon sx={{display: "flex", color: '#EFF2F1'}}/>
                        <Typography variant='h7'
                        component='div'
                            sx={textstyle}>
                            Logout
                         </Typography>
                        </Button>
                        </li>
                    </ul>
                
                </Box>
            </Toolbar>
           </nav>
        </div>
        </Drawer>
       
        {/* <Box sx={{display:'flex'}}>
            <Drawer
            sx={{
                flexGrow:1,
                  display:{xs:'none',sm:'block'},
                  ml:2.5,mt:0.5,
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  bgcolor:'#4059AD'
                },
              }}
              variant="permanent"
              anchor="left"
            >
                {drawer}
            </Drawer>
        </Box> */}
        </Box>
        </Box>
    );
}