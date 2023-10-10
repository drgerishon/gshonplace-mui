import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import styled from '@emotion/styled';
import { DateRange, EmojiEmotions,Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const AddPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: '400px',
            height: '300px',
            // backgroundColor: 'white',
            padding: 3,
            margin: 'auto',
            marginTop: '10%',
            borderRadius: 5,
          }} bgcolor={"background.default"} color={"text.primary"}
        >
          <Typography
            variant="h6"
            textAlign="center"
            alignContent="center"
            justifyContent="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="rem sharpt"
              src=" http://material-ui.com/static/images/avatar/7.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Gerishon
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard"
            Multiline
            row={4}
            variant="standard"
            placeholder="What is on your mind?"
          ></TextField>
          <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color='primary'/>
                <Image color="secondary"/>
                <VideoCameraBack color='success'/>
                <PersonAdd color='error'/>
          </Stack>

          <ButtonGroup variant='contained' fullWidth
          aria-label="button group">
            <Button >Post</Button>
            <Button sx={{width: "100px"}}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
