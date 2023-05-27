import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography, Button, Box } from '@mui/material';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import React, { useState } from 'react';
import CommentModal from './CommentModal';

function Notecard() {
    const[expanded, setExpanded] = useState(false);
    const[commentOpen, setCommentOpen] = useState(false);
    
    const handleExpand = () => {
        setExpanded(!expanded);
    }
    const commentToggle = () => {
        setCommentOpen(!commentOpen);

    }
  return (
    <Card>
        <CardActionArea>
            <CardHeader
                avatar={
                    <Avatar aria-label="user_avatar">
                      S
                    </Avatar>
                }
                title="Username"
                subheader="Date"
            />
            <CardContent>
                {/* input title and description with axios */}
                <Typography variant='h6' component='h1'>
                    Note Title
                </Typography>
                {/* will exapnd on dot icon */}
                <Typography variant='body1' component='p'>
                    Note Description
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions disableSpacing sx={{ display:'flex'}}>
            <IconButton aria-label="edit note">
                <ModeEditRoundedIcon />
            </IconButton>
            <IconButton aria-label="delete note">
                <DeleteRoundedIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1}}></Box>
            <Button variant="outlined" startIcon={<CommentRoundedIcon />} onClick={commentToggle}>
                Comment
            </Button>
            <CommentModal open={commentOpen} onClose={commentToggle}/>
        </CardActions>
    </Card>
  )
}

export default Notecard