import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "black", boxShadow: "none", mt: "10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileNav />
          <DesktopNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
