import React from "react";
import { useState } from "react";
import { Grid, IconButton, ListItemText, Typography, Box } from "@mui/material";
import MoodBadOutlinedIcon from "@mui/icons-material/MoodBadOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

const drawerWidth = 300;
function Mood() {
  const styleForPaper = {
    margin: 20,
    textAlign: "center",
    display: "inline-block",
  };
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showIcons, setShowIcons] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");
  

  // const handleIconClick = (icon, image) => {
  //   changeBackground(image);
  // }
    const handleIconClick = (icon,image) => {
      
      setSelectedIcon(icon);
      setShowIcons(false);
    };
    return (
      <div
      style={{ backgroundImage: `url(${backgroundImage})`,height:"200px", margin :'0 0 2% 0',backgroundRepeat:'no-repeat' }}
        // component="main"
        
      >
        {showIcons ? (
          <>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Roboto",
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              How was your day?
            </Typography>
            <Box
              sx={{
                display: 'flex',
          justifyContent: 'center',
                
              }}
            >
              <ul style={{ alignItems: "center", padding: 0, margin: 0 }}>
                <IconButton
                  style={styleForPaper}
                  onClick={() => handleIconClick("Sad")}
                >
                  <MoodBadOutlinedIcon />
                  <ListItemText primary="Sad" />
                </IconButton>
                {/* <IconButton
                  style={styleForPaper}
                  onClick={() => handleIconClick("Very Sad")}
                >
                  <SentimentDissatisfiedOutlinedIcon />
                  <ListItemText primary="Very Sad" />
                </IconButton> */}
                {/* <IconButton
                  style={styleForPaper}
                  onClick={() => handleIconClick("Neutral")}
                >
                  <SentimentSatisfiedOutlinedIcon />
                  <ListItemText primary="Neutral" />
                </IconButton> */}
                <IconButton
                  style={styleForPaper}
                  onClick={() => handleIconClick("Happy")}
                >
                  <MoodOutlinedIcon />
                  <ListItemText primary="Happy" />
                </IconButton>
                <IconButton
                  style={styleForPaper}
                  onClick={() =>
                    handleIconClick("Very Happy")
                  }
                >
                  <SentimentVerySatisfiedOutlinedIcon />
                  <ListItemText primary="Very Happy" />
                </IconButton>
              </ul>
            </Box>
          </>
        ) : (
          <Box sx={{
            display: 'flex',
      justifyContent: 'center',
      
            
          }}>
            <Typography
            variant="h4"
            sx={{ fontFamily: "Roboto", fontSize: "1.5rem", color: "black" }}
          >
            Cherish the moment of happiness!!!
          </Typography>
            </Box>
          
        )}
      </div>
    );
  };

export default Mood;
