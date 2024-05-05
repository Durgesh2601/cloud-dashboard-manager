import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { CUSTOM_COLORS } from "../../theme";
import { FaLink } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiCurrencyDollarSimpleLight } from "react-icons/pi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { PrimaryMenuItems, SecondaryMenuItems } from "./MenuItems";
import Logo from "../../assets/Logo.svg";
import { useLayout } from "../../context/LayoutContext";
import { DRAWER_WIDTH } from "../../constants";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: CUSTOM_COLORS.primary,
  color: CUSTOM_COLORS.secondary,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: CUSTOM_COLORS.primary,
  color: CUSTOM_COLORS.secondary,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  borderBottom: "2px solid #461988",
  ...theme.mixins.toolbar,
}));

const menuIconsStyle = {
  color: CUSTOM_COLORS.secondary,
  size: 19,
};

function Sidebar() {
  const { isDrawerOpen, setIsDrawerOpen } = useLayout();
  const [selectedMenu, setSelectedMenu] = useState(PrimaryMenuItems[0]?.id);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleSelectMenu = (id: number, link: string) => {
    setSelectedMenu(id);
    navigate(link);
  };

  const renderMenuItem = (item: any) => {
    let IconComponent = null;
    switch (item?.icon) {
      case "apps":
        IconComponent = <AiOutlineAppstore {...menuIconsStyle} />;
        break;
      case "connections":
        IconComponent = <FaLink {...menuIconsStyle} />;
        break;
      case "cost":
        IconComponent = <PiCurrencyDollarSimpleLight {...menuIconsStyle} />;
        break;
      case "security":
        IconComponent = <MdOutlinePrivacyTip {...menuIconsStyle} />;
        break;
      case "admin":
        IconComponent = <GoPerson {...menuIconsStyle} />;
        break;
      case "docs":
        IconComponent = <CiBookmark {...menuIconsStyle} />;
        break;
      default:
        IconComponent = null;
    }

    return (
      <ListItemButton
        selected={selectedMenu === item?.id}
        key={item?.id}
        onClick={() => handleSelectMenu(item?.id, item?.path)}
      >
        {IconComponent && (
          <ListItemIcon sx={{ minWidth: 50 }}>{IconComponent}</ListItemIcon>
        )}
        <ListItemText primary={item?.title} />
      </ListItemButton>
    );
  };

  return (
    <Drawer
      variant="permanent"
      open={isDrawerOpen}
      sx={{
        width: DRAWER_WIDTH,
        ...(isDrawerOpen && {
          ...openedMixin,
          "& .MuiDrawer-paper": openedMixin,
        }),
        ...(!isDrawerOpen && {
          ...closedMixin,
          "& .MuiDrawer-paper": closedMixin,
        }),
      }}
    >
      <DrawerHeader>
        <IconButton>
          <img src={Logo} alt="Kapstan" />
        </IconButton>
        <Typography variant="h5">Kapstan</Typography>
      </DrawerHeader>
      <List>{PrimaryMenuItems.map((item) => renderMenuItem(item))}</List>
      {/* Bottom actions */}
      <List sx={{ marginTop: "auto" }}>
        {SecondaryMenuItems.map((item) => renderMenuItem(item))}
        <ListItemButton
          sx={{
            borderTop: "2px solid #461988",
          }}
          onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
        >
          <ListItemIcon sx={{ minWidth: 50 }}>
            {isDrawerOpen ? (
              <MdKeyboardDoubleArrowLeft {...menuIconsStyle} />
            ) : (
              <MdKeyboardDoubleArrowRight {...menuIconsStyle} />
            )}
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;
