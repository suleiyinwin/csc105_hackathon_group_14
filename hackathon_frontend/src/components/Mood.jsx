import React from 'react'
import { useState } from 'react';
import { Grid, IconButton, ListItemText, Typography } from '@mui/material'
import MoodBadOutlinedIcon from '@mui/icons-material/MoodBadOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import sadImage from '../../src/assets/Sad.jpg'
// import verySadImage from '../src/assets/verysad.jpg';
// import neutralImage from 'src/assets/Neutral.jpg';
// import happyImage from 'src/assets/Happy.jpg';
// import veryHappyImage from 'src/assets/veryhappy.jpg';
function Mood() {
    const styleForPaper = {
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      };
      const [selectedIcon, setSelectedIcon]=useState(null);
      const [showIcons, setShowIcons] = useState(true);
     
      const getBackgroundImage=()=>{
        switch (selectedIcon){
            case 'Sad':
                return `url(${sadImage})`;
            case 'Very Sad':
                return `url(${verySadImage})`;
            case 'Neutral':
                return `url(${neutralImage})`;
            case 'Happy':
                return `url(${happyImage})`;
            case 'Very Happy':
                return `url(${veryHappyImage})`;
            default:
                return 'none';
        }
      }
      const handleIconClick=(icon)=>{
        getBackgroundImage();

        setSelectedIcon(icon);
        setShowIcons(false);
        
      };
  return (
    <Grid container component="main" sx={{height:'100vh',
                                        background: getBackgroundImage(),
                                        backgroundSize:'cover'}}>
        <Grid item xs={5} sm={7} md={12} style={{display:'flex',
                                                alignItems:'center',
                                                flexDirection:'column'}}>
            {/* <Typography variant='h5' sx={{fontFamily:'Robotos',
                                        textAlign:'center',
                                        fontSize:'1.5rem'}}>
                How was your day?
            </Typography>
        <ul style={{alignItems:'center',
                    padding:0,
                    margin:0}}>
                <IconButton  style={styleForPaper}>
                    <MoodBadOutlinedIcon/>
                    <ListItemText primary="Sad"/>
                </IconButton>
                <IconButton style={styleForPaper}>
                   <SentimentDissatisfiedOutlinedIcon/>
                   <ListItemText primary="Very Sad"/>
                </IconButton>
                <IconButton style={styleForPaper}> 
                    <SentimentSatisfiedOutlinedIcon/>
                    <ListItemText primary="Neutral"/>
                </IconButton>
                <IconButton style={styleForPaper}>
                   <MoodOutlinedIcon/>
                   <ListItemText primary="Happy"/>
                </IconButton>
                <IconButton style={styleForPaper}>
                    <SentimentVerySatisfiedOutlinedIcon/>
                    <ListItemText primary="Very Happy"/>
                </IconButton>
                </ul> */}
                {showIcons ? (
                <>
                <Typography variant="h5" sx={{ fontFamily: 'Roboto', textAlign: 'center', fontSize: '1.5rem' }}>
                How was your day?
                </Typography>
                <ul style={{ alignItems: 'center', padding: 0, margin: 0 }}>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('bad')}
                >
                <MoodBadOutlinedIcon />
                <ListItemText primary="Sad" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('notGood')}
                >
                <SentimentDissatisfiedOutlinedIcon />
                <ListItemText primary="Very Sad" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('neutral')}
                 >
                <SentimentSatisfiedOutlinedIcon />
                <ListItemText primary="Neutral" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('good')}
                 >
                <MoodOutlinedIcon />
                <ListItemText primary="Happy" />
                </IconButton>
                <IconButton
                style={styleForPaper}
                onClick={() => handleIconClick('great')}
                >
                <SentimentVerySatisfiedOutlinedIcon />
                <ListItemText primary="Very Happy" />
              </IconButton>
            </ul>
          </>
        ) : (
          <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'black' }}>
            Some other words
          </Typography>
        )}
        </Grid>
        </Grid>
  )
}

export default Mood