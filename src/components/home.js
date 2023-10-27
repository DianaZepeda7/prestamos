import * as React from "react";
import "../styles/home.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpeedIcon from "../assets/images/speed.png";
import Users from "../assets/images/users.png";
import Aside from "../components/aside";

export const Home = () => {
  return (
    <>
      <body
        className="body"
        style={{
          backgroundColor: "#E9E6E6",
          height: "120vh",
          width: "100vw",
          marginLeft: "4%",
        }}
      >
        <Box component="main" sx={{ flexGrow: 0, p: 3, pt: 0 }}>
          <div class="icon-and-title">
            <div class="icon">
              <img src={SpeedIcon} alt="dashboard" />
            </div>
            <h1>DASHBOARD</h1>
          </div>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipita adipiscing bibendum est
            ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus
            vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
            commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <br></br>
          <br></br>
          <img
            src={Users}
            alt="dashboard"
            style={{ display: "block", margin: "auto", height: "45%" }}
          />
        </Box>
      </body>
    </>
  );
};
