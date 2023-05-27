import React from 'react'
import { Grid, Box } from '@mui/material'
import Nav from '../components/Nav'
import Mood from '../components/Mood'
import Postcard from '../components/Postcard'
import PostCreateModal from '../components/PostCreateModal'
import GlobalContext from '../context/globalContext'
import Cookies from 'js-cookie'
import Axios from '../components/AxiosInstance'
import { useEffect, useState, useContext} from 'react';

function Dashboard() {
const [posts, setPosts] = useState([]);
const {user} = useContext(GlobalContext);

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
    <Grid item xs={2.5} display={{ sm:"block" }}>
       <Nav/>
    </Grid>
    <Grid item xs={8.5} display={{ xs: "block" }}>
    <Box sx={{ height:'40%', mb: 2, }}>
            <Mood/>
        </Box>
          <Grid container >
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
            
          </Grid>
    </Grid>
   </Grid> 
  )
}

export default Dashboard