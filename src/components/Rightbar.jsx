import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300}>
          online friends
        </Typography>
        <AvatarGroup max={4} spacing={0}>
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="rem sharpt"
            src=" http://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="http://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="http://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Converstion
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="http://material-ui.com/static/images/avatar/2.jpg"/>
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="http://material-ui.com/static/images/avatar/5.jpg"/>
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="http://material-ui.com/static/images/avatar/7.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
