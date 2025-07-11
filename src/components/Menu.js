import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import Planyourtrip from "./pages/Planyourtrip";
import {
  Accessibility,
  AirplanemodeActive,
  Explore,
  FormatListBulletedOutlined,
  InfoOutlined,
  LocalActivity,
  LocationOnOutlined,
  ModeNight,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Menu = ({ mode, setMode }) => {
  const navigate = useNavigate();

  return (
    <Box mt={3} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" sx={{ marginTop: 10 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/plan")}>
              <ListItemIcon><AirplanemodeActive /></ListItemIcon>
              <ListItemText primary="Plan Your Trip" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/things")}>
              <ListItemIcon><FormatListBulletedOutlined /></ListItemIcon>
              <ListItemText primary="Things to Do" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/explore")}>
              <ListItemIcon><Explore /></ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/facts")}>
              <ListItemIcon><Accessibility /></ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/local")}>
              <ListItemIcon><LocationOnOutlined /></ListItemIcon>
              <ListItemText primary="Local" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/tickets")}>
              <ListItemIcon><LocalActivity /></ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/help")}>
              <ListItemIcon><InfoOutlined /></ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><ModeNight /></ListItemIcon>
              <Switch
                aria-label="Toggle dark mode"
                checked={mode === "dark"}
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Menu;
