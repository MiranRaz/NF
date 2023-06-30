import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { AppBar, DrawerHeader } from "./NavBarStyling.js";
import nf from "../../assets/nf.png";

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".image-size", {
      width: (index, target) => {
        const scrollTrigger = ScrollTrigger.getById(
          target.getAttribute("image-size")
        );
        const position = scrollTrigger ? scrollTrigger.progress : 0;
        const direction = scrollTrigger ? scrollTrigger.direction : 1;

        if (direction === 1) {
          // Scrolling down
          return `${Math.min(200 + position * 500, 700)}px`;
        } else {
          // Scrolling up
          return `${Math.max(700 - position * 500, 200)}px`;
        }
      },
      scrollTrigger: {
        trigger: ".image-size",
        scrub: 2,
        start: "top top",
        end: "bottom top",
      },
    });
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
            }}
          >
            <img
              src={nf}
              alt=""
              draggable={false}
              className="image-size"
              style={{ width: "700px" }}
            />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              color: "#E9E9E9",
              ...(open && { display: "none" }),
              opacity: scrollPosition >= 200 ? 1 : 0, // Apply opacity based on scroll position
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
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
