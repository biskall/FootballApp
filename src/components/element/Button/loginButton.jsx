import React from "react";
import Button from "@mui/material/Button";

const LoginButton = ({ label, value, onChange, placeholder }) => {
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
      Login
    </Button>
  );
};

export default LoginButton;
