import React from "react";
import Button from "@mui/material/Button";

const LogoutButton = ({ label, value, onChange, placeholder }) => {
  return (
    <Button
      variant="text"
      color="inherit"
      size="large"
      sx={{
        color: "#333",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
