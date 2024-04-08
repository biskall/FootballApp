import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input, PasswordInput } from "../../components";
import { useGetNotesQuery } from "../../redux/apiQueries/notes";
import { getNotes } from "../../redux/selectors/notes/notes";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isSuccess } = useGetNotesQuery();
  const dataObj = useSelector((state) => getNotes(state));

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  useEffect(() => {
    console.log(dataObj);
  }, [dataObj]);

  return (
    <Box
      sx={{
        mx: "auto",
        mr: 44,
        mt: 9,
        mb: "auto",
        width: "40%",
      }}
    >
      <Box
        sx={{
          maxWidth: "400px",
          minWidth: "100px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
