import react from "react";
import { Typography,Box,Drawer, Toolbar, Divider, Button} from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate} from "react-router";
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Nav(){
    const drawerWidth=300;
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
    return(
        <Box sx={{display:'flex'}}>
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
                <Typography sx={{
                    fontFamily:"Robotos",
                    fontWeight: 300,
                    fontSize: 30,
                    color: '#EFF2F1',
                    marginLeft: '13px'
                }}
                variant='h4'>
                    Logo
                </Typography>
                <Toolbar/>
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
                    Username
                   </Typography>
                   <nav position='static'>
                    <Toolbar style={{padding:0,margin:0}}>
                        <Box sx={{
                            flexGrow:1,
                            display:{xs:'none',sm:'block'},
                            ml:2.5, mt:0.5,
                        }}>
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
            </Drawer>
        </Box>
    );
}