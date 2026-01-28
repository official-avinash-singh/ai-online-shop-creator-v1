import React from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

const SignUpForm = () => {
  return (
    <>
    <div>
      <InputField label="Name" />
      <InputField label="username" />
      <InputField label="Name" />
      <Button>Sign Up</Button>

    </div>
    </>
  );
};

export default SignUpForm;