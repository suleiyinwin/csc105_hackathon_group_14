import React from "react";
import { Grid, Box, IconButton, Button, Typography } from "@mui/material";
import Nav from "../components/Nav";
import Mood from "../components/Mood";
import Postcard from "../components/Postcard";
import PostCreateModal from "../components/PostCreateModal";
import GlobalContext from "../context/globalContext";
import Cookies from "js-cookie";
import Axios from "../components/AxiosInstance";
import { useEffect, useState, useContext } from "react";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
function Dashboard() {
    const [posts, setPosts] = useState([]);
    const [openCreate,setOpenCreate]=useState(false);
    const {user} = useContext(GlobalContext);
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

  return (
    <Grid container>
      <Grid item sm={2.5} display={{ sm: "block", xs: "none" }}>
        <Nav />
      </Grid>
      <Grid item sm={9.5} xs={12} display={{xs:"block"}}>
            <Box sx={{ height: "40%", mb: 2 }}>
          <Mood />
        </Box>
        {/* map notecard */}
        {posts.map((post,index) => (
                <Grid item xs={12} key={index}>
                {/* map notecard */}
                <Postcard 
                title={post.title} 
                description={post.description} 
                date={post.updatedAt}
                />
              </Grid>
            ))}
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
           
      </Grid>
    </Grid>
  );
}

export default Dashboard;

