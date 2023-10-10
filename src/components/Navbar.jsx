import {
  Box,
  MenuItem,
  Menu,
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Avatar,
} from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import { Mail, Notifications } from '@mui/icons-material';
import { useState } from 'react';
const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  display: 'flex',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '20%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: { display: 'flex' },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: { display: 'none' },
}));
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };


  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          GshonPlace
        </Typography>
        <LaptopIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications color="action" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={handleClick}
          />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">GERISHON</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

