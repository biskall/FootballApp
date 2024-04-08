import React from 'react';
import TextField from '@mui/material/TextField';

function PasswordInput({ label, value, onChange, placeholder }) {
  return (
    <TextField
      label={label}
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );
}

export default PasswordInput;