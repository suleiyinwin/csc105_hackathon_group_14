import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography, Button, Box, Grid } from '@mui/material';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import React, { useState } from 'react';
import CommentModal from './CommentModal';
import { useContext } from 'react';
import GlobalContext from '../context/globalContext';
// import {format } from 'fecha';

function Postcard({ title='', description ='', date=''}) {
    const[expanded, setExpanded] = useState(false);
    const[commentOpen, setCommentOpen] = useState(false);
    const {user} = useContext(GlobalContext);
    
    const handleExpand = () => {
        setExpanded(!expanded);
    }
    const commentToggle = () => {
        setCommentOpen(!commentOpen);

    }
    // useEffect(() => {
    //   // TODO: Implement get user
    //   const userToken = Cookies.get('UserToken');
    //   // console.log(userToken);
    //   if (userToken == null || userToken == "undefined") return;
    //   // 1. check if cookie is set
    //   // 2. send a request to server
    //   Axios.get("/me", {
    //     headers: {
    //       Authorization: `Bearer ${userToken}`,
    //     },
    //   }).then((res) => {
    //     console.log(res.data.user.username);
    //     // 3. if success, set user information
    //     setUser({
    //       username: res.data.user.username,
    //       email: res.data.user.email,
    //     });
    //   });
    // }, []);
    return (
       
              <Box sx={{
                display:'flex',
                justifyContent:'center',
                
              }}>
                <Card sx={{width:'80%',
                        fontFamily:'Roboto'}}>
                  <CardActionArea sx={{bgcolor:'#F5F5F5'}} >
                    <CardHeader
                      avatar={
                        <Avatar aria-label="user_avatar">
                          S
                        </Avatar>
                      }
                      title={user.username}
                      // subheader={format(new Date(date), 'DD/MM/YYYY hh:mm A')}
                    />
                    <CardContent>
                      {/* input title and description with axios */}
                      <Typography variant="h6" component="h1" sx={{fontFamily:'Roboto'}}>
                        {title}
                      </Typography>
                      {/* will expand on dot icon */}
                      <Typography variant="body1" component="p" sx={{fontFamily:'Roboto'}}>
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions disableSpacing sx={{ display: 'flex' }}>
                    <IconButton aria-label="edit note" sx={{color:'#4059AD'}}>
                      <ModeEditRoundedIcon />
                    </IconButton>
                    <IconButton aria-label="delete note" sx={{color:'#4059AD'}}>
                      <DeleteRoundedIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button variant="outlined" startIcon={<CommentRoundedIcon />} onClick={commentToggle} sx={{fontFamily:'Roboto',
                        color:'#4059AD'}}>
                      Comment
                    </Button>
                    <CommentModal open={commentOpen} onClose={commentToggle} />
                  </CardActions>
                </Card>
              </Box>
      
      );
    }
    
  

export default Postcard