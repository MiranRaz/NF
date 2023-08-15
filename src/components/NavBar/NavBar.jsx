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
                backgroundColor: "transparent",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src="https://www.shutterstock.com/shutterstock/videos/1060585801/preview/stock-footage-montage-of-happy-multi-cultural-and-multi-ethnic-people-of-diverse-background-gender-ethnicity.webm"
                  type="video/webm"
                />
              </video>
              <span
                style={{
                  position: "absolute",
                  color: "white",
                  fontSize: "22px",
                }}
              >
                Customers
              </span>
            </button>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray",
                backgroundColor: "transparent",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src="https://www.shutterstock.com/shutterstock/videos/26633884/preview/stock-footage-top-view-of-business-team-working-at-trendy-loft-office-young-mixed-race-group-of-people-puts-palm.webm"
                  type="video/webm"
                />
              </video>
              <span
                style={{
                  position: "absolute",
                  color: "white",
                  fontSize: "22px",
                }}
              >
                About
              </span>
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
                backgroundColor: "transparent",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src="https://www.shutterstock.com/shutterstock/videos/1040841707/preview/stock-footage-cameraman-in-process-of-work-in-studio-camera-lens.webm"
                  type="video/webm"
                />
              </video>
              <span
                style={{
                  position: "absolute",
                  color: "white",
                  fontSize: "22px",
                }}
              >
                Gear
              </span>
            </button>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray",
                backgroundColor: "transparent",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src="https://www.shutterstock.com/shutterstock/videos/1056908216/preview/stock-footage-broadcast-tv-studio-production-vision-switcher-studio-director-broadcast-video-mixer-operation.webm"
                  type="video/webm"
                />
              </video>
              <span
                style={{
                  position: "absolute",
                  color: "white",
                  fontSize: "22px",
                }}
              >
                Projects
              </span>
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
