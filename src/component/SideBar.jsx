import React from "react";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, Typography, styled, useTheme } from "@mui/material";
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, Maximize, PeopleOutline, PersonOutline, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey , blue } from '@mui/material/colors';
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Array_1 = [
  { "text": "Dashboard", "icon": <HomeOutlined />, "path": "/" },
  { "text": "Manage Team", "icon": <PeopleOutline />, "path": "/team" },
  { "text": "Contacts Information", "icon": <ContactsOutlined />, "path": "/contact" },
  { "text": "Invoices Balances", "icon": <ReceiptOutlined />, "path": "/invoices" },
]

const Array_2 = [
  { "text": "Profile Form", "icon": <PersonOutline />, "path": "/form" },
  { "text": "Calendar", "icon": <CalendarTodayOutlined />, "path": "/calendar" },
  { "text": "FAQ page", "icon": <HelpOutlineOutlined />, "path": "/faq" },
]

const Array_3 = [
  { "text": "Bar Chart", "icon": <BarChartOutlined />, "path": "/bar" },
  { "text": "pie Chart", "icon": <PieChartOutlineOutlined />, "path": "/pie" },
  { "text": "Line Chart", "icon": <TimelineOutlined />, "path": "/line" },
  { "text": "Geography Chart", "icon": <MapOutlined />, "path": "/geography" },
]




const SideBar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 77 : 40,
          height: open ? 77 : 40,
          mt: 2,
          border: "2px solid grey",
          transition: "0.25s"
        }}
        alt="Remy Sharp"
        src="https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/293562507_1036346753909274_599495499315081668_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=3MCSDLROb7EAX89TwK_&_nc_ht=scontent.fcai20-6.fna&oh=00_AfCNOLwlsEutWfP90pBZomGD4FejMZaDP6fOIlMVA_FQnw&oe=64FDE685"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          transition: "0.25s",
          mt: 1
        }}>
        Mohamed sharaf
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          transition: "0.25s",
          mb: 2,
          color: theme.palette.info.main
        }}>
        Admin
      </Typography>

      <Divider />

      <List>
        {Array_1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname == item.path ? theme.palette.mode === "dark" ? grey[800] : blue[700] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array_2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname == item.path ? theme.palette.mode === "dark" ? grey[800] : blue[700] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array_3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname == item.path ? theme.palette.mode === "dark" ? grey[800] : blue[700] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Drawer>
  )
}

export default SideBar;