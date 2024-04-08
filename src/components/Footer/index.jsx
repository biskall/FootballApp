import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useStyles from "./styles";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const style = useStyles();

  return (
    <Box component="footer" sx={style.footer}>
      <Typography variant="body1">
        {isMobile ? "Mobile Footer Content" : "Desktop Footer Content"}
      </Typography>
    </Box>
  );
}

export default Footer;
