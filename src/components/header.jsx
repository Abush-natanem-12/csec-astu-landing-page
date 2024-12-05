import { Link } from "react-router-dom";
import Light from "./light";
import { FacebookIcon, MenuIcon, Youtube } from "lucide-react";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { styled, alpha } from "@mui/material/styles";

const HeaderComponent = function () {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[rgba(8,47,73,.9)] h-[100%] pl-2 pt-16"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" rel="noopener noreferrer">
            <ListItemText primary="Home" className="text-gray-400" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#about">
            <ListItemText primary="About" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/divisions"
            rel="noopener noreferrer"
          >
            <ListItemText primary="Divisions" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/events"
            rel="noopener noreferrer"
          >
            <ListItemText primary="Events" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/gallerry"
            rel="noopener noreferrer"
          >
            <ListItemText primary="Gallerry" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#mission">
            <ListItemText primary="Mission" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#contact"
            rel="noopener noreferrer"
          >
            <ListItemText primary="Contact" className="text-gray-400" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List className="flex flex-col items-center">
        <ListItemText
          primary={"Contact Us"}
          className="text-xl text-blue-400 flex justify-center"
        />
        <ListItem disablePadding>
          <ListItemButton component="a" href="tel:+251973338159">
            <ListItemIcon className="text-gray-400">
              <CallIcon className="text-blue-500" />
            </ListItemIcon>
            <ListItemText primary="Telephone" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="mailto:hopet0435@gmail.com">
            <ListItemIcon className="text-gray-400">
              <EmailIcon className="text-blue-500" />
            </ListItemIcon>
            <ListItemText primary="Email" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://www.facebook.com/profile.php?id=100090243952611"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon className="text-gray-400">
              <FacebookIcon className="text-blue-500" />
            </ListItemIcon>
            <ListItemText primary="Facebook" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon className="text-gray-400">
              <WhatsApp className="text-blue-500" />
            </ListItemIcon>
            <ListItemText primary="+251973338159" className="text-gray-400" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://www.linkedin.com/in/dg-oda-mineral-supplier-and-transportation-service-472085317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon className="text-gray-400">
              <LinkedIn className="text-blue-500" />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" className="text-gray-400" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 140,
      color: "#cbd5e1",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
        backgroundColor: "rgba(8,47,73,.9)",
        border: "2px solid rgba(8,47,73,1)",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: "#2563eb",
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[300],
      }),
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="w-full flex items-center justify-center gradient1 relative">
      <Light size={500} top={-100} left={-150} />
      <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] h-16 lg:h-28 mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl lg:text-2xl 2xl:text-3xl tracking-[1px] font-[700] xl:font-[1000] text-white relative z-10"
        >
          <img src="/logo.svg" alt="logo" className="h-10 text-white" />
        </Link>

        <div className="hidden lg:flex w-[70%] 2xl:w-[55%] py-4 px-2 justify-between">
          <div className="w-[100%] flex items-center justify-between">
            <a
              href="#about"
              className=" text-xl font-[500] text-white4 tracking-[.5px] hover:text-white1 transition duration-300"
            >
              About
            </a>
            <Link
              to="/gallerry"
              className=" text-xl font-[500] text-white4 tracking-[.5px] hover:text-white1 transition duration-300"
            >
              Gallerry
            </Link>
            <Link
              to="/divisions"
              className=" text-xl font-[500] text-white4 tracking-[.5px] hover:text-white1 transition duration-300 rounded-lg"
            >
              Divisions
            </Link>

            <Link
              to="/events"
              className=" text-xl font-[500] text-white4 tracking-[.5px] hover:text-white1 transition duration-300 rounded-lg"
            >
              Events
            </Link>

            <a
              href="#mission"
              className=" text-xl font-[500] text-white4 tracking-[.5px] hover:text-white1 transition duration-300 rounded-lg"
            >
              Missions
            </a>

            <a
              href="/#contact"
              className=" text-2xl font-[600] text-white4 tracking-[.5px] hover:text-white1 transition duration-300 "
            >
              Contact
            </a>
          </div>
        </div>

        {
          <div className="lg:hidden">
            <Button onClick={toggleDrawer("right", true)}>
              {" "}
              <MenuIcon />{" "}
            </Button>
            <SwipeableDrawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
            >
              {list("right")}
            </SwipeableDrawer>
          </div>
        }

        <div className="lg:block hidden">
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            disableElevation
            onClick={handleClick}
            size="small"
          >
            Our Socials
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            applyStyles
          >
            <MenuItem onClick={handleClose} disableRipple>
              <a
                href="https://ift.tt/2PEWePp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />
                Facebook
              </a>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <a
                href="https://www.linkedin.com/company/csec-astu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LinkedIn />
                Linkedin
              </a>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <a
                href="https://youtube.com/@csec_cbd?si=ye5Pmc995a2KoNnt"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Youtube />
                Youtube
              </a>
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              <a
                href="https://t.me/CSEC_ASTU"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Telegram />
                Telegram
              </a>
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
