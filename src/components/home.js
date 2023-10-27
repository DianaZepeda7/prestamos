import * as React from "react";
import "../styles/home.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LineIcon from "@mui/icons-material/LineAxis";
import ArroweRightIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import PaymentsIcon from "@mui/icons-material/PaymentsOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ListIcon from "@mui/icons-material/ListAltOutlined";
import UpdateIcon from "@mui/icons-material/UpdateOutlined";
import SpeedIcon from "../assets/images/speed.png";
import Users from "../assets/images/users.png";
import AvatarIcon from "../assets/images/avatar.jpg";
import Swap from "@mui/icons-material/SwapHoriz";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [counter, setCounter] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
    setCounter(counter + 1); 
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setCounter(counter + 1); 
  };

  const handleClick = () => {
    if (counter % 2 === 0) {
      handleDrawerOpen();
    } else {
      handleDrawerClose();
    }
  };

  const navigate = useNavigate();

  const handlePrestamos = () => {
    navigate("/prestamos");
  };

  return (
    <>
      <body
        className="body"
        style={{ backgroundColor: "#E9E6E6", height: "120vh", width: "100vw" }}
      >
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            open={open}
            style={{ width: 60, marginRight: "90%" }}
          ></AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader
              className="drawer"
              style={{
                height: "15vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img
                src={AvatarIcon}
                className="avatar"
                alt="avatar"
                width={50}
              />
              <div style={{ marginLeft: "10px" }}>
                <p style={{ margin: "0", color: "white", fontSize: "20px" }}>
                  Rick Sanchez
                </p>
                <p
                  style={{
                    margin: "0",
                    marginLeft: "10%",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Administrador
                </p>
              </div>
            </DrawerHeader>
            <Divider />
            <List className="drawer" style={{ height: "100%", color: "white" }}>
              {[
                "Dashboard",
                "Prestamos",
                "Deudores",
                "Pagos",
                "Inversores",
                "Lista",
                "Retiros",
              ].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 ? (
                        <LineIcon style={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                      {index === 1 ? (
                        <ArroweRightIcon
                          onClick={handlePrestamos}
                          style={{ color: "white" }}
                        />
                      ) : (
                        ""
                      )}
                      {index === 2 ? (
                        <PersonIcon style={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                      {index === 3 ? (
                        <PaymentsIcon style={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                      {index === 4 ? (
                        <ArrowLeftIcon style={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                      {index === 5 ? (
                        <ListIcon style={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                      {index === 6 ? (
                        <UpdateIcon style={{ color: "white" }} />
                      ) : (
                        ""
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <DrawerHeader />
          <Box component="main" sx={{ flexGrow: 0, p: 3, pt: 0 }}>
          <IconButton
              onClick={handleClick}
              color="black"
              style={{  marginTop: "01%" }}
            >
              <Swap />
            </IconButton>
           
            <div class="icon-and-title">
              <div class="icon">
                <img src={SpeedIcon} alt="dashboard" />
              </div>
              <h1>DASHBOARD</h1>
            </div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipita adipiscing
              bibendum est ultricies integer quis. Cursus euismod quis viverra
              nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
              fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
              tincidunt lobortis feugiat vivamus at augue. At augue eget arcu
              dictum varius duis at consectetur lorem. Velit sed ullamcorper
              morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <br></br>
            <br></br>
            <img
              src={Users}
              alt="dashboard"
              style={{ display: "block", margin: "auto", height: "45%" }}
            />
          </Box>
        </Box>
      </body>
    </>
  );
};
