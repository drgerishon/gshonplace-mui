import {
    Box,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Avatar,
    IconButton,
    Typography,
  } from '@mui/material';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import ShareIcon from '@mui/icons-material/Share';
  import { CheckBox, Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
  return (
    <Box>
         <Card sx={{margin: 5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="300"
          image="https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <CheckBox icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{color: "red"}}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Post