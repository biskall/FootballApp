import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input, PasswordInput } from "../../components";
import { useRegisterMutation } from "../../redux/apiQueries";

const SignUp = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isSuccess }] = useRegisterMutation();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const SignUpHandleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign up logic here
    register({ name, email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("oveddddddddddddddddd");
    }
    console.log("fuckkkkk it");
  }, [isSuccess]);

  return (
    <Box
      sx={{
        mr: "auto",
        ml: "auto",
        mt: 9,
        mb: "auto",
        width: "40%",
      }}
    >
      <Box
        sx={{
          maxWidth: "400px",
          minWidth: "100px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: 2 }}
        >
          <Input
            label="Username"
            value={name}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
          <Input
            label="Email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <PasswordInput
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={SignUpHandleSubmit}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
