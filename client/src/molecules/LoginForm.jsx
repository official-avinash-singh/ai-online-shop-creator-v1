import React from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

const LoginForm = () => {
  return (
    <>
      <div>
        <InputField label="username" />
        <InputField label="password" />
        <Button>Sign In</Button>
      </div>
      
    </>
  );
};

export default LoginForm;