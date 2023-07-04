import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  CssBaseline,
  List,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { AppBar, DrawerHeader } from "./NavBarStyling.js";
import nf2 from "../../assets/nf2.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          boxShadow: 0,
          transition: "background-color 0.3s",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              zIndex: 1,
            }}
          >
            <img
              src={nf2}
              draggable={false}
              style={{
                opacity: scrollPosition >= 300 ? 1 : 0, // Apply opacity based on scroll position
                transition: "all 0.5s ease-in-out",
                width: "87px",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              alt={""}
            />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            disabled={scrollPosition < 300}
            sx={{
              color: "#E9E9E9",
              ...(open && { display: "none" }),
              opacity: scrollPosition >= 300 ? 1 : 0, // Apply opacity based on scroll position
              transition: "opacity 0.3s",
            }}
          >
            <MenuIcon sx={{ fontSize: "69px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon sx={{ fontSize: "69px" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray",
                height: "100%",
                width: "100%",
              }}
            >
              Customers
            </button>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray",
                width: "100%",
                height: "100%",
              }}
            >
              About
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray",
                width: "100%",
                height: "100%",
              }}
            >
              Gear
            </button>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray",
                width: "100%",
                height: "100%",
              }}
            >
              Projects
            </button>
          </div>
        </List>

        <Divider />
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-around",
            gap: "8px",
          }}
        >
          <div>ig</div>
          <div>fb</div>
          <div>mail</div>
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
