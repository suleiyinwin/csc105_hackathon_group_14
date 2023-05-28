import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography, Button, Box, Grid } from '@mui/material';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import React, { useState, useEffect } from 'react';
import CommentModal from './CommentModal';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import GlobalContext from '../context/globalContext';
import PostEditModal from './PostEditModal';
import { useParams } from 'react-router';
import Axios from './AxiosInstance';
// import {format } from 'fecha';

function Postcard({postId, title='', description ='', date='', handleDelete = (id) => {}}) {
    const[expanded, setExpanded] = useState(false);
    const[commentOpen, setCommentOpen] = useState(false);
    const {user, setStatus} = useContext(GlobalContext);
    const [openEdit, setOpenEdit] = useState(false);

  const [post, setPost] = useState({
    postId: postId,
    title: title,
    description: description,
    date: date
  });

    const handleExpand = () => {
        setExpanded(!expanded);
    }
    const commentToggle = () => {
        setCommentOpen(!commentOpen);

    }
    const handlePostEditOpen = () => {
      setOpenEdit(true);
    };
    const handlePostEditClose = () => {
      setOpenEdit(false);
    };
    const handleEdit = () => {
      // handlePostDetailClose();
      handlePostEditOpen();
    };
    useEffect(()=>{
      console.log(post);
    //   const userToken=Cookies.get('UserToken');
    //   Axios.get(`/post/${post.postId}`, {headers:{Authorization: `Bearer ${userToken}`
    // }}).then((res)=>{
    //   setPost(res.data.data); 
    // });
    },[]);
    // Delete Note
    return (
       
              <Box sx={{
                display:'flex',
                justifyContent:'center',
                
              }}>
                <Card sx={{width:'80%',
                        fontFamily:'Roboto',margin:"1% 0"}}>
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
                        {post.title}
                      </Typography>
                      {/* will expand on dot icon */}
                      <Typography variant="body1" component="p" sx={{fontFamily:'Roboto'}}>
                        {post.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions disableSpacing sx={{ display: 'flex' }}>
                    <IconButton onClick={handlePostEditOpen}  aria-label="edit post" sx={{color:'#4059AD'}}>
                      <ModeEditRoundedIcon />
                    </IconButton>
                    <PostEditModal setPost={setPost} handleEdit={handleEdit} handleClose={handlePostEditClose} open={openEdit} post={post} />

                    <IconButton onClick={()=>handleDelete(post.postId)} aria-label="delete post" sx={{color:'#4059AD'}}>
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