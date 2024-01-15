import React, { useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import GroupIcon from "@mui/icons-material/Group";
import BlogIcon from "@mui/icons-material/Article";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Logo from "../assets/logo.svg";

const MobileNav = () => {
  const [state, setState] = useState({});
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const anchorPosition = "right";
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleFeaturesClick = () => {
    setFeaturesOpen(!featuresOpen);
  };

  const handleCompanyClick = () => {
    setCompanyOpen(!companyOpen);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <Button
        noWrap
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <img src={Logo} alt="logo" />
      </Button>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(anchorPosition, true)}
        color="inherit"
        sx={{ position: "fixed", top: "10px", right: "10px" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ display: { xs: "flex", md: "none" } }}
        anchor={anchorPosition}
        open={state[anchorPosition]}
        onClose={toggleDrawer(anchorPosition, false)}
      >
        <Box
          sx={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            // gap: "10px",
            height: "100%",
            textAlign: "left",
          }}
        >
          <Button
            onClick={toggleDrawer(anchorPosition, false)}
            variant="text"
            sx={{
              color: "black",
              position: "fixed",
              right: "1px",
              top: "1px",
            }}
          >
            <CloseIcon />
          </Button>
          <Button
            onClick={handleFeaturesClick}
            variant="text"
            sx={{ mt: "50px" }}
          >
            Features
            {featuresOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
          <Collapse in={featuresOpen} timeout="auto" unmountOnExit>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <PlaylistAddCheckIcon sx={{ color: "purple" }} />
              </ListItemIcon>
              <ListItemText primary="Todo List" />
            </Button>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <CalendarMonthIcon sx={{ color: "aqua" }} />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </Button>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <NotificationsIcon sx={{ color: "yellow" }} />
              </ListItemIcon>
              <ListItemText primary="Reminder" />
            </Button>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <ScheduleIcon sx={{ color: "darkblue" }} />
              </ListItemIcon>
              <ListItemText primary="Planning" />
            </Button>
          </Collapse>
          <Button
            onClick={handleCompanyClick}
            variant="text"
            sx={{ color: "black" }}
          >
            Company
            {companyOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
          <Collapse in={companyOpen} timeout="auto" unmountOnExit>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <HistoryIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText primary="History" />
            </Button>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <GroupIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="Our Team" />
            </Button>
            <Button sx={{ color: "black" }}>
              <ListItemIcon>
                <BlogIcon sx={{ color: "purple" }} />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </Button>
          </Collapse>
          <Button variant="link" sx={{ color: "black" }}>
            Careers
          </Button>
          <Button variant="link" sx={{ color: "black" }}>
            About
          </Button>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button variant="link">Login</Button>
            <Button
              variant="outlined"
              sx={{
                width: "100px",
                margin: "auto",
                borderRadius: "10px",
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
