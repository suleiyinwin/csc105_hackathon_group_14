import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import Nav from "../components/Nav";
import Mood from "../components/Mood";
import Postcard from "../components/Postcard";
import PostCreateModal from "../components/PostCreateModal";
import GlobalContext from "../context/globalContext";
import Cookies from "js-cookie";
import Axios from "../components/AxiosInstance";
import { useEffect, useState, useContext } from "react";
import { AxiosError } from 'axios';

function Dashboard() {
    const [posts, setPosts] = useState([]);
    const [openCreate,setOpenCreate]=useState(false);
    const {user, setStatus} = useContext(GlobalContext);
    const handlePostCreateOpen=()=>{
        setOpenCreate(true);
    }
    const handlePostCreateClose=()=>{
        setOpenCreate(false);
    }
useEffect(()=>{
    const userToken = Cookies.get('UserToken');
    if(userToken !== undefined && userToken !== 'undefined') {
        Axios.get('/postsByUser', { headers: { Authorization: `Bearer ${userToken}`}})
        .then((res)=>{
            setPosts(res.data.data);
        });
    }
},[user]);
const handleDelete = async (id) => {
    try {
      const userToken = Cookies.get('UserToken');
      const response = await Axios.delete(`/post/${id}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (response.data.success) {
        // TODO: show status of success here
        console.log(posts)
        const newPosts = posts.filter((p)=>p.id !== id)
        console.log(id,
            newPosts
        );
        setPosts(newPosts)
        setStatus({severity:'success', msg:'Delete post successfully'})
        // navigate(-1);
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        // TODO: show status of error from AxiosError here
        setStatus({severity:'error', msg:error.response.data.error});
      } else {
        // TODO: show status of other errors here
        setStatus({severity:'error',msg: error.message});
      }
    }
  };
  return (
    <Box>
      <Nav />
      
            <Box sx={{ height: "40%", mb: 2 }}>
          <Mood />
        
        {/* map notecard */}
        {posts.map((post,index) => (
                <Grid item xs={12} key={index}>
                {/* map notecard */}
                <Postcard 
                postId={post.id}
                title={post.title} 
                description={post.description} 
                date={post.updatedAt}
                handleDelete={handleDelete}
                />
              </Grid>
            ))}
        {/* <Postcard /> */}
        <Box sx={{float:'right',
                        marginTop:'30px'}}>
            
           <Button sx={{color:'#4059AD',
                        borderRadius:'100px'}}
                        variant="contained"
                        onClick={handlePostCreateOpen}>
           <Typography sx={{fontFamily:'Roboto',
                            color:'white',}}>Create Notes</Typography>
           </Button>
           <PostCreateModal open={openCreate} handleClose={handlePostCreateClose} post={posts} setPosts={setPosts} />
            </Box>
    </Box>
    </Box>
        
    
  );
}

export default Dashboard;

