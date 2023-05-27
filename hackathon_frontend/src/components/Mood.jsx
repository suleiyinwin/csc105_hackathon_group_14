import React from 'react'
import { useState } from 'react';
import { Grid, IconButton, ListItemText, Typography,Box } from '@mui/material'
import MoodBadOutlinedIcon from '@mui/icons-material/MoodBadOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';

const drawerWidth=300;
function Mood() {
    const styleForPaper = {
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      };
      const [selectedIcon, setSelectedIcon]=useState(null);
      const [showIcons, setShowIcons] = useState(true);
      const [backgroundImage, setBackgroundImage] = useState('');
      const changeBackground = (image) => {
        setBackgroundImage(image);
      };
    
     

      
      const handleIconClick=(icon,image)=>{
        changeBackground(image);

      const handleIconClick=(icon)=>{



        setSelectedIcon(icon);
        setShowIcons(false);
        
      };
  return (
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(103% - ${drawerWidth}px)` },
            margin:'0 auto', backgroundImage: `url(${backgroundImage})`,
            height: '90%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop:0
            }}
      >
           
                {showIcons ? (
                <>
                <Typography variant="h5" sx={{ fontFamily: 'Roboto', textAlign: 'center', fontSize: '1.5rem' }}>
                How was your day?
                </Typography>
                <Box sx={{
                    margin:{xs:4}
                }}>
                <ul style={{ alignItems: 'center', padding: 0, margin: 0 }}>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('Sad','../assets/1.jpg')}
                >
                <MoodBadOutlinedIcon />
                <ListItemText primary="Sad" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('Very Sad','../assets/2.jpg')}
                >
                <SentimentDissatisfiedOutlinedIcon />
                <ListItemText primary="Very Sad" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('Neutral','../assets/3.jpg')}
                 >
                <SentimentSatisfiedOutlinedIcon />
                <ListItemText primary="Neutral" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('Happy','../assets/4.jpg')}
                 >
                <MoodOutlinedIcon />
                <ListItemText primary="Happy" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('Very Happy','../assets/5.jpg')}
                >
                <SentimentVerySatisfiedOutlinedIcon />
                <ListItemText primary="Very Happy" />
              </IconButton>
            </ul>
            </Box>
          </>
          
        ) : (
            
          <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'black' }}>
            Some other words
          </Typography>
          
        )}
        </Box>
  )
}
}
export default Mood