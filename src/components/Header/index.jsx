import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LoginButton, LogoutButton } from "../element/index";

const Header = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(user);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: isMobile ? "block" : "none" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "#333", flexGrow: 1, fontWeight: 600 }}
        >
          My Responsive Header
        </Typography>
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center" }}>
            {!user ? <LoginButton /> : <LogoutButton />}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
