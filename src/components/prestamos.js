import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
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
import PrestamosIcon from "../assets/icons/prestamos.png";
import AvatarIcon from "../assets/images/avatar.jpg";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
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

export const Prestamos = () => {
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

  const handleHome = () => {
    navigate("/home");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "deudor", headerName: "Deudor", width: 200 },
    {
      field: "fechadelprestamo",
      headerName: "Fecha del prestamos",
      width: 170,
    },

    { field: "cantidad", headerName: "Cantidad", width: 150 },
    { field: "inversion", headerName: "Inversión", width: 170 },
    { field: "status", headerName: "Status", width: 140 },
  ];

  const rows = [
    {
      id: 1,
      deudor: "DATO DE PRUEBA 1",
      fechadelprestamo: "Octubre 20 de 2023",
      cantidad: 1000000,
      inversion: "DATO DE PRUEBA 1",
      status: "Pagado",
    },
    {
      id: 2,
      deudor: "DATO DE PRUEBA 2",
      fechadelprestamo: "Octubre 20 de 2023",
      cantidad: 2000000,
      inversion: "DATO DE PRUEBA 2",
      status: "Pendiente",
    },
    {
      id: 3,
      deudor: "DATO DE PRUEBA 3",
      fechadelprestamo: "Octubre 21 de 2023",
      cantidad: 3000000,
      inversion: "DATO DE PRUEBA 3",
      status: "Adeudo Atrasado",
    },
  ];

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
                        <LineIcon
                          onClick={handleHome}
                          style={{ color: "white" }}
                        />
                      ) : (
                        ""
                      )}
                      {index === 1 ? (
                        <ArroweRightIcon style={{ color: "white" }} />
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

          <Box>
            <IconButton
              onClick={handleClick}
              color="black"
              style={{ marginLeft: "3%", marginTop: "01%" }}
            >
              <Swap />
            </IconButton>
            <div class="icon-and-title" style={{ marginLeft: "3%" }}>
              <div class="icon">
                <img src={PrestamosIcon} alt="dashboard" />
              </div>
              <h3>PRESTAMOS</h3>
            </div>

            <Box
              style={{
                height: "90hw",
                width: "90vw",
                marginLeft: "3%",
                backgroundColor: "white",
              }}
            >
              <Button
                variant="contained"
                startIcon={<AddIcon style={{ height: "15px" }} />}
                style={{
                  fontSize: "10px",
                  marginLeft: "78vw",
                  marginTop: "1%",
                  height: "4.5vh",
                  marginBottom: "1%",
                  backgroundColor: "#2A46AE",
                  borderRadius: "30px",
                }}
              >
                Nuevo Prestamo
              </Button>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </Box>
          </Box>
        </Box>
      </body>
    </>
  );
};
