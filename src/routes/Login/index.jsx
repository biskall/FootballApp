import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input, PasswordInput } from "../../components";
import { useGetNotesQuery } from "../../redux/apiQueries/notes";
import { useLoginMutation, useGetUserQuery } from "../../redux/apiQueries";
import { getNotes } from "../../redux/selectors/notes/notes";
import { getUser } from "../../redux/selectors/auth/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, { isSuccess }] = useLoginMutation();
  const { isSuccess } = useGetUserQuery();
  // const dataObj = useSelector((state) => getNotes(state));
  const dataObj = useSelector((state) => getUser(state));

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const LoginHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("email =>" ,email);
    console.log("password =>" ,password);
    // login();
    // Handle login logic here
  };

  const SignUpHandleSubmit = async (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  useEffect(() => {
    if(dataObj){
      console.log("oveddddddddddddddddd");
    }
    console.log("fuckkkkk it");
  }, [dataObj]);

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
            onClick={LoginHandleSubmit}
          >
            Login
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={SignUpHandleSubmit}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
