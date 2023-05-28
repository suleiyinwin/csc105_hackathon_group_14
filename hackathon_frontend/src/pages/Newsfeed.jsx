import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Postcard from '../components/Postcard';
import Mood from '../components/Mood';
import { useState } from 'react';
import Axios from '../components/AxiosInstance';
import Cookies from 'js-cookie';

function Newsfeed() {
  const [publicpost, setPublicpost] = useState([]);

  useEffect(()=>{
    const userToken = Cookies.get('UserToken');
    if(userToken !== undefined && userToken !== 'undefined') {
        Axios.get('/publicPosts', { headers: { Authorization: `Bearer ${userToken}`}})
        .then((res)=>{
            setPublicpost(res.data.data);
        });
    }
});
  return (
    <Box>
      
          <Nav />
        
        {/* <Grid item xs={9} display={{ xs: "block" }}> */}
        <Box sx={{ height:'100%', mb: 2, }}>
            <Mood/>
        </Box>
          {/* <Grid container > */}
          {publicpost.map((post,index) => (
                <Grid item xs={12} key={index}>
                {/* map notecard */}
                <Postcard 
                postId={post.id}
                title={post.title} 
                description={post.description} 
                date={post.updatedAt}
                />
              </Grid>
            ))}
         
    </Box>
  )
}

export default Newsfeed