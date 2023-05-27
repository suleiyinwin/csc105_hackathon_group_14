import React, { useState } from 'react';
import { Modal, Card, Box, TextField, Button  } from '@mui/material';

function CommentModal({ open = commentOpen, onClose = commentToggle }) {
    const [textField, setTextField] = useState('');

    const handleAddComment = () => {

    }
  return (
    <Modal open={open} onClose={onClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            placeholder="Type your comment"
            variant="standard"
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box sx={{ overflowY: 'scroll', maxHeight: 'calc(400px - 2rem)' }}>
          {/* {comments.map((comment) => (
            <Card key={comment.id} sx={{ p: '1rem', m: '0.5rem' }}>
              {comment.msg}
            </Card>
          ))} */}
        </Box>
      </Card>
    </Modal>
  )
}

export default CommentModal