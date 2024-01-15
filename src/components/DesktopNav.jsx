import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ScheduleIcon from "@mui/icons-material/Schedule";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Logo from "../assets/logo.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DesktopNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false); 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuOpen2 = (event) => {
    setAnchorE2(event.currentTarget);
    setMenuOpen2(true);
  };

  let closeMenu = () => {
    setMenuOpen(false);
  };

  let closeMenu2 = () => {
    setMenuOpen2(false);
  };
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          color: "inherit",
          textDecoration: "none",
          mr: "15px",
        }}
      >
        <img src={Logo} alt="logo" style={{ width: "90%", maxWidth: "100%" }} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            onClick={handleMenuOpen}
            variant="text"
            sx={{ color: "black" }}
          >
            Features
            {menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <PlaylistAddCheckIcon sx={{ color: "purple" }} />
              </ListItemIcon>
              <ListItemText primary="Todo List" />
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <CalendarMonthIcon sx={{ color: "aqua" }} />
              </ListItemIcon>
              <ListItemText primary="Calender" />
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <NotificationsIcon sx={{ color: "yellow" }} />
              </ListItemIcon>
              <ListItemText primary="Reminder" />
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <ScheduleIcon sx={{ color: "darkblue" }} />
              </ListItemIcon>
              <ListItemText primary="Planning" />
            </MenuItem>
          </Menu>
          <Button
            onClick={handleMenuOpen2}
            variant="text"
            sx={{ color: "black" }}
          >
            Company
            {menuOpen2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
          <Menu anchorEl={anchorE2} open={menuOpen2} onClose={closeMenu2}>
            <MenuItem onClick={closeMenu2}> History </MenuItem>
            <MenuItem onClick={closeMenu2}> Our Team </MenuItem>
            <MenuItem onClick={closeMenu2}> Blog </MenuItem>
          </Menu>
          <Button variant="link" sx={{ color: "black" }}>
            Careers
          </Button>
          <Button variant="link" sx={{ color: "black" }}>
            About
          </Button>
        </Box>
        <Box>
          <Button variant="link" color="primary">
            login
          </Button>
          <Button variant="outlined" color="primary">
            register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DesktopNav;
